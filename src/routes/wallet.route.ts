import { getWalletBalance } from '@utils/walletHelpers';
import { Request, Response } from 'express';
import { authorizationChecker } from 'middlewares/authorizationChecker.middleware';
import { createWalletController } from 'controllers/createwallet.controller';
import { getUserWallet } from 'controllers/getUserWallet.controller';
import { deleteWalletController } from 'controllers/deleteWalletController.controller';
import { checkHasDeletePermission } from 'middlewares/checkHasDeletePermission.middleware';

const express = require('express');

const walletRoutes = express.Router();

walletRoutes.get('/getWalletBalance', async (req: Request, res: Response) => {
    const { address } = req.query;
    if (!address) {
        return res.status(400).send('Error: Wallet address is required');
    }
    let walletRes = await getWalletBalance(address as string);
    if (typeof walletRes === 'string') {
        return res.status(500).send(walletRes);
    }
    return res.send(walletRes);
});

walletRoutes.post('/createWallet', authorizationChecker, createWalletController);

walletRoutes.get('/getUserWallet', authorizationChecker, getUserWallet);

walletRoutes.delete('/deleteWallet', authorizationChecker, checkHasDeletePermission, deleteWalletController);

export default walletRoutes;
