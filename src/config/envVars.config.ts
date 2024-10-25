import * as dotenv from "dotenv";

dotenv.config();

export const envVars = {
    DATABASEURI: process.env.MONGODB_URI,
    JWTSECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    WALLETAPIKEY: process.env.WALLET_API_KEY,
    WALLETBALANCEAPI: process.env.WALLET_BALANCE_API,
};
