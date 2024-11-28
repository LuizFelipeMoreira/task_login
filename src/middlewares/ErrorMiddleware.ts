import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../helpers/api-errors';

const ErrorHandling = (
    err: Error & Partial<ApiError>,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = err.statusCode ?? 500;

    if (statusCode) console.log(statusCode);

    console.error('Erro capturado pelo middleware', err);
    res.status(statusCode).json({ error: err.message });
};

export { ErrorHandling };
