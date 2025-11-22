import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
    return {
        data: {
            heading: 'Welcome to EJS Express Boilerplate',
            subHeading: 'A modern Express.js starter with EJS, Bootstrap, and TypeScript.'
        },
        metadata: {
            title: 'Emeka Ifeora | Home',
            description: 'Senior software engineer specializing in full-stack development and cloud solutions.'
        }
    };
}