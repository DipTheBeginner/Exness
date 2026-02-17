import { prisma } from "@repo/database";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcrypt";



export default async function signupUserController(req: Request, res: Response) {
    try {

        const { email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (existingUser) {
            return (
                res.status(409).json({
                    success: false,
                    error: "User already exist"
                })
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        })

        const token = jwt.sign(
            { id: newUser.id, email: newUser.email },

            "secret"
        )

        return res.status(201).json({
            success:true,
            token
        })


    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            error: "Signup Failed"
        });
    }
}




