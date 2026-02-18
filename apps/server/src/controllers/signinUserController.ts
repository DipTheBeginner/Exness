import { Request, Response } from "express";
import { prisma } from "@repo/database";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


export default async function signinUserController(req: Request, res: Response) {

    try {

        const { email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        });


        if (!existingUser) {
            return res.status(401).json({
                success: false,
                error: "Invalid Credentials"
            })
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            existingUser.password

        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
            })
        }

        const token = jwt.sign({
            id: existingUser.id,
            email: existingUser.email
        }, "secret");


        return res.json({
            success: true,
            token
        });


    } catch (error) {

        console.log("signin error", error)
        return res.status(500).json({
            success: false,
            error: "Login Failed"
        })

    }

}