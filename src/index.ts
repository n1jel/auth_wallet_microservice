import logger from "@utils/logger";
import connectToDatabase from "config/db.config";
import app from "config/express.config";
import { Response } from "express";
import authRoutes from "routes/auth.route";
import walletRoutes from "routes/wallet.route";

const port = process.env.PORT;
connectToDatabase();

app.get('/', (res: Response) => {
    res.send('TS-Node-Express running');
    logger.info('Application started');
});

app.use('/auth', authRoutes);

app.use('/wallet', walletRoutes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
