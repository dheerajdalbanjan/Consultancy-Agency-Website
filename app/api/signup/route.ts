import { connectMongo } from "@/libs/mongodb";
import User from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import Package from "@/model/package";


export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();
        const hashedPass = await bcrypt.hash(password, 10)
        console.log(hashedPass)
        await connectMongo();
        const user = await User.create({ name, email, password:hashedPass })

        // add a signup bonus pack to new user in my packages. 

        const signUpBonus = {
            type: "Sign Up Package",
      mode: "starter",
      name: "30 Minute Session Package (Sign Up)",
      price: "0",
      sessions_included: "1 session",
      session_length: "30 mins",
      counselor_matching: "non-professional",
      video: "89",
      features: ["Single 30-minute session.", "Non-professional counselor."],
      order_id: "ffff", 
      payment_id: "ffff", 
      user_id: user._id 
        }

   // const re = await fetch(`${process.env.NEXTAUTH_URL}/api/package`, {method:"POST",headers: { "Content-type": "application/json" },body:JSON.stringify(signUpBonus)}) ;

        const re = await Package.create(signUpBonus) ;


    if(re.ok)
        return NextResponse.json({ message: "User created" }, { status: 201 })
    else 
    return NextResponse.json({ message: "User created but package assigning failed" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "An error occured while signing up the user" }, { status: 500 })
    }


}