import { createUserWallet } from "@services/wallet.service";
import { Request, Response } from "express";

export const createWalletController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { walletName } = req.body;
    let createWalletRes = await createUserWallet(userId, walletName);
    if (createWalletRes.status) {
        res.status(createWalletRes.statusCode).send({
            message: createWalletRes.message,
            status: createWalletRes.status,
            data: createWalletRes.data
        });
    } else {
        res.status(createWalletRes.statusCode).send({
            message: createWalletRes.message,
            status: createWalletRes.status
        });
    }
}