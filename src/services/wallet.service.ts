import UserWallet from "schema/userWallet";

export const createUserWallet = async (userId: string, walletName: string) => {
    try {
        let wallet = await UserWallet.create({ walletName, userId });
        return { statusCode: 201, message: "Wallet created successfully", status: true, data: wallet };
    } catch (e) {
        return { statusCode: 500, message: "Server error", status: false };
    }
}

export const getUserWalletByUserId = async (userId: string) => {
    try {
        let wallets = await UserWallet.find({ userId });
        if (wallets.length > 0) {
            return { status: true, message: 'User wallet found', statusCode: 200, data: wallets };
        } else {
            return { status: true, message: 'User does not have any wallet', statusCode: 200, data: [] };
        }
    } catch (e) {
        return { status: false, message: 'Server Error', statusCode: 500 };
    }
}

export const deleteWallet = async (userId: string, walletId: string) => {
    let wallet = await UserWallet.findOneAndDelete({ userId, _id: walletId });
    if (wallet) {
        return { status: true, message: 'Wallet deleted successfully', statusCode: 200 };
    } else {
        return { status: false, message: 'Wallet not found', statusCode: 404 };
    }
}