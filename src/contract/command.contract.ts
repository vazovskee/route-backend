import { Request, Response } from 'express';

export abstract class CommandContract {
    // protected onlyAuthorized: boolean = false;

    /**
     * Handles request and sends response
     * @param { Request } req
     */
    abstract run(req: Request): Promise<any>;

    async runExternal(req: Request, res: Response): Promise<void> {
        try {
            // if (this.onlyAuthorized && !userStorage.get()) {
            //     throw new UnauthorizedError('User is unauthorized.');
            // }
            const response = await this.run(req);
            res.status(200);
            res.send(response);
        } catch (e: any) {
            console.error(e);
            const code = CommandContract.getHttpCodeByErrorCode(e.code);
            res.status(code);
            res.send({
                status: code,
                message: e.message,
            });
        }
    }

    private static getHttpCodeByErrorCode(code): number {
        if (code && typeof code === 'number' && code >= 200 && code < 600) {
            return code;
        }

        return 500;
    }
}
