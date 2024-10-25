import { registerNewUser } from "@services/auth.service";
import { Request, Response } from "express";

export const signUpController = async (req: Request, res: Response) => {
    const { name, password } = req.body;
    const resposnse = await registerNewUser(name, password);
    res.status(resposnse.statusCode).send({ message: resposnse.message, status: resposnse.status });
}
