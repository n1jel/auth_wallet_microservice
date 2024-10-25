import { NextFunction, Request, Response } from "express";

export const checkHasDeletePermission = (req: Request, res: Response, next: NextFunction) => {
    const { userId } = res.locals;
    if (!req.query.userId) {
        res.status(401).send({ message: 'UserId is required', status: false });
    }
    if (!req.query.walletId) {
        res.status(401).send({ message: 'WalletId is required', status: false });
    }
    if (userId === req.query.userId) {
        next();
    } else {
        res.status(401).send({ message: 'Unauthorized. User does not have permission to delete wallet', status: false });
    }
}