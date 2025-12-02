import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadResume = async (req: Request, res: Response) => {
    try {
        const rootDir = process.cwd();
        const resumePath = path.join(rootDir, 'src/resources/resume.pdf');

        if (!fs.existsSync(resumePath)) {
            return res.status(404).json({ 
                error: 'Resume not found',
                message: 'The requested file does not exist.' 
            });
        }

        const stat = fs.statSync(resumePath);
        
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Emeka_Ifeora_Resume.pdf"');
        res.setHeader('Content-Length', stat.size);

        const fileStream = fs.createReadStream(resumePath);
        fileStream.pipe(res);

        fileStream.on('error', (error) => {
            console.error('Error streaming file:', error);
            if (!res.headersSent) {
                res.status(500).json({ 
                    error: 'Download failed',
                    message: 'An error occurred while downloading the file.' 
                });
            }
        });
    } catch (error) {
        console.error('Download error:', error);
        res.status(500).json({ 
            error: 'Server error',
            message: 'An unexpected error occurred.' 
        });
    }
};
