import logger from "@utils/logger";
import { NextFunction, Request, Response } from "express";
import User from "schema/userSchema";

const signUpDataValidation = (req: Request, res: Response, next: NextFunction) => {
    const { name, password } = req.body;
    if (!name || !password) {
        logger.error('Signup Failed')
        return res.status(400).send({ message: 'Name and Password are required', status: false });
    }
    next();
};

const loginDataValidation = (req: Request, res: Response, next: NextFunction) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).send({ message: 'Name and Password are required', status: false });
    }
    // const userData = await User.findOne({ name });
    // if (!userData) {
    //     return res.status(404).send({ message: 'User not registered', status: false });
    // }
    // const isPasswordCorrect = await bcrypt.compare(password, userData.password);
    // if (!isPasswordCorrect) {
    //     return res.status(401).send({ message: 'Invalid Credentials', status: false });
    // }
    next();
};

export { signUpDataValidation, loginDataValidation };