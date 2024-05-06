import { connectMongo } from "@/libs/mongodb";
import User from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        const hashedPass = await bcrypt.hash(password, 10)
        console.log(hashedPass)
        await connectMongo();
        await User.updateOne({email: email} , {password: hashedPass})



        return NextResponse.json({ message: "User update" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "An error occured while signing up the user" }, { status: 500 })
    }


}