export class ApiError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export class UserNotExist extends ApiError {
    constructor(message: string) {
        super(message, 400);
    }
}

export class UserInvalid extends ApiError {
    constructor(message: string) {
        super(message, 201);
    }
}
