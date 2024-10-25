import logger from "@utils/logger";
import bcrypt from "bcrypt";
import { LoginResponse, ServiceResponse } from "models/serviceResponse.type";
import User from "schema/userSchema";
import jwt from "jsonwebtoken";
import { envVars } from "config/envVars.config";

const registerNewUser = async (name: string, password: string): Promise<ServiceResponse> => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, password: hashedPassword });

        return { statusCode: 201, message: "New user registered", status: true };
    } catch (e) {
        logger.error(e);
        return { statusCode: 500, message: "Error occured while registering new user", status: false };
    }
}

const loginUser = async (name: string, password: string): Promise<LoginResponse> => {
    try {
        const userData = await User.findOne({ name });
        if (!userData) {
            return { statusCode: 404, message: "User not registered", status: false };
        }
        const isPasswordCorrect = await bcrypt.compare(password, userData.password);
        if (!isPasswordCorrect) {
            return { statusCode: 401, message: "Invalid Credentials", status: false };
        }
        const token = jwt.sign({ userId: userData._id }, envVars.JWTSECRET as string, { expiresIn: '1h' });
        const userDetails = await User.findById(userData._id);
        return { statusCode: 200, message: "Login sucessful", status: true, data: { userDetails, token } };
    } catch (e) {
        logger.error(e);
        return { statusCode: 500, message: "Error occured while logging in user", status: false };
    }
}

export { registerNewUser, loginUser };