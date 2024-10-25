import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    walletName: { type: String, required: true },
    userId: { type: String, required: true },
});

const UserWallet = mongoose.model('UserWallet', walletSchema);

export default UserWallet;