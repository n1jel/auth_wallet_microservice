import { NextFunction, Request, Response } from "express";
import User from "schema/userSchema";

const userAccountValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const hasUser = await User.exists({ name });
    if (hasUser) {
        return res.status(409).send({ message: 'User already registered', status: false });
    }
    next();
};

export default userAccountValidation;
