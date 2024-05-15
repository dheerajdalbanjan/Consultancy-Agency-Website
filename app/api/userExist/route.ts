import { connectMongo } from "@/libs/mongodb"; 
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const {email} = await req.json() ;
        console.log(email)
        await connectMongo(); 
        const use = await User.findOne({email}).select("_id") ;


        // const rand = await User.find().select("email") ;
        // console.log(rand)
        return NextResponse.json({user:use}) ;
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({user:undefined})
        
    }
}