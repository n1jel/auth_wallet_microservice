import { loginUser } from "@services/auth.service";
import { Request, Response } from "express";

export const signInController = async (req: Request, res: Response) => {
    const { name, password } = req.body;
    const response = await loginUser(name, password);

    if (response.status) {
        res.status(response.statusCode).send({
            message: response.message,
            status: response.status,
            data: response.data
        });
    } else {
        res.status(response.statusCode).send({
            message: response.message,
            status: response.status
        });
    }
}
