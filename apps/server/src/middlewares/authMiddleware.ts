import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";





export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {

    try {

        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.status(401).json({
                success: false,
                message: "Unauthorized request"

            });
            return;
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                res.status(401).json({
                    message: "Unauthorized user"

                })
            }
            req.user = decoded as AuthUser
        })

        next();


    } catch (error) {
        res.status(404).json({
            message: "Error in middleware function"
        })
        return;

    }

}