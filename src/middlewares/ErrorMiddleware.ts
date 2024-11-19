import express, { NextFunction, Request, Response } from 'express';

const ErrorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        console.error('Erro capturado pelo middleware', err);
        res.status(500).json({ error: err.message });
    }
};

export { ErrorHandling };
