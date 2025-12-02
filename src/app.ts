
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import ejsLayouts from 'express-ejs-layouts';
import fs from 'fs';
import metadata from './site/app/metadata.js';
import { DynamicRouter } from './lib/dynamic-router.js';
import { logRoutes, createRouteDebugger } from './lib/route-utils.js';
import { applySecurity } from './lib/security.js';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function createApp() {
    const app = express();
    const dynamicRouter = new DynamicRouter();

    if (process.env.NODE_ENV === 'development') {
        const { default: connectLiveReload } = await import('connect-livereload');
        app.use(connectLiveReload());
    }

    applySecurity(app);

    logRoutes();

    app.set('view engine', 'ejs');
    app.set('views', path.join(rootDir, 'src/site'));
    app.set('layout extractScripts', true);
    app.set('layout extractStyles', true);
    app.use(express.static(path.join(rootDir, 'src/site/public')));

    if (process.env.NODE_ENV === 'development') {
        app.use(createRouteDebugger());
    }

    app.get('/health', (req: Request, res: Response) => {
        res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
    });

    const { default: apiRoutes } = await import('./api/routes.js');
    app.use('/api', apiRoutes);

    app.use((req: Request, res: Response, next: NextFunction) => {
        if (req.path.startsWith('/api')) {
            return next();
        }
        res.locals.currentPath = req.path;
        res.locals.metadata = metadata;
        next();
    });

    app.use((req: Request, res: Response, next: NextFunction) => {
        if (req.path.startsWith('/api')) {
            return next();
        }
        ejsLayouts(req, res, next);
    });

    app.use(dynamicRouter.middleware());

    app.use((req: Request, res: Response) => {
        res.status(404).render('app/404');
    });

    return app;
}

export default createApp;
