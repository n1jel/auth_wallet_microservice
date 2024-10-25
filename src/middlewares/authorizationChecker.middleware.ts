import { envVars } from "config/envVars.config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface decodedToken extends JwtPayload {
    userId: string;
}

export const authorizationChecker = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized. Token Missing', status: false });
    }
    jwt.verify(token, envVars.JWTSECRET as string, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized. Invalid Token', status: false });
        }
        const payload = decoded as decodedToken;
        res.locals.userId = payload.userId;
        next();
    });
}