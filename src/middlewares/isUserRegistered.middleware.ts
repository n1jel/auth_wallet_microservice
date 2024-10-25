import { NextFunction, Request, Response } from "express";
import User from "schema/userSchema";

const isUserRegistered = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const userData = await User.findOne({ name });
    if (!userData) {
        return res.status(401).send({ message: 'User not registered', status: false });
    }
    next();
}

export default isUserRegistered;
