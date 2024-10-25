import { getUserWalletByUserId } from "@services/wallet.service";
import { Request, Response } from "express";

export const getUserWallet = async (req: Request, res: Response) => {
    const { uId } = req.query;
    const userWalletRes = await getUserWalletByUserId(uId as string);
    if (userWalletRes.status) {
        res.status(userWalletRes.statusCode).send({ message: userWalletRes.message, status: userWalletRes.status, data: userWalletRes.data });
    } else {
        res.status(userWalletRes.statusCode).send({ message: userWalletRes.message, status: userWalletRes.status });
    }
}