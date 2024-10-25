import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from 'schema/userSchema';

const isPasswordCorrect = async (req: Request, res: Response, next: NextFunction) => {
    const { name, password } = req.body;
    const userData = await User.findOne({ name });
    if (!userData) {
        return res.status(404).send({ message: 'User not registered', status: false });
    }
    const isPasswordCorrect = await bcrypt.compare(password, userData.password);
    if (!isPasswordCorrect) {
        return res.status(401).send({ message: 'Invalid Credentials', status: false });
    }
    next();
}

export default isPasswordCorrect;
