import axios, { AxiosResponse } from 'axios';
import { IWalletBalance } from '../types/wallet';

const dotenv = require('dotenv');
dotenv.config();

const walletUrl = process.env.WALLET_BALANCE_API;
const walletApiKey = process.env.WALLET_API_KEY;

export const getWalletBalance = async (address: string): Promise<IWalletBalance | string> => {
    try {
        const apiUrl = walletUrl;
        const apiKey = walletApiKey;
        if (!apiUrl) {
            return 'Error: Wallet API URL not found';
        }
        const response: AxiosResponse = await axios.get(apiUrl, {
            params: {
                module: 'account',
                action: 'balance',
                address: address,
                apikey: apiKey,
            },
        });

        return response?.data;
    } catch (error) {
        throw new Error('Error fetching wallet balance');
    }
};