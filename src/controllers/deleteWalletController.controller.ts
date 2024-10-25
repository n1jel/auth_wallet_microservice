import { deleteWallet } from "@services/wallet.service";
import { Request, Response } from "express";

export const deleteWalletController = async (req: Request, res: Response,) => {
    try {
        let { userId, walletId } = req.query;
        let deleteRes = await deleteWallet(userId as string, walletId as string);
        if (deleteRes.status) {
            res.status(deleteRes.statusCode).send({ message: deleteRes.message, status: deleteRes.status });
        } else {
            res.status(deleteRes.statusCode).send({ message: deleteRes.message, status: deleteRes.status });
        }
    } catch (e) {
        return { status: false, message: 'Server Error', statusCode: 500 };
    }
}