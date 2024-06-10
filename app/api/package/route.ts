import { connectMongo } from "@/libs/mongodb";
import Package from "@/model/package";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOption } from "../auth/[...nextauth]/route";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

interface CustomUser {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    phone : string
  }
  
  

export async function POST(req: Request){


    try {
        const data = await req.json() ;
        connectMongo() ;
        Package.create(data) ;
        

        return NextResponse.json({message:"successfully created package"}, {status:200})
    } catch (error) {
        return NextResponse.json({message:"Failed to add package"}, {status: 400})
    }
}


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(authOption);

    if (!session || !session.user) {
        return NextResponse.json({ message: 'Not authenticated' }, {status: 404});
    }

    try {
        const userId = new mongoose.Types.ObjectId(session.user.id);
        const data = await Package.find({ user_id: userId });

        console.log(data);

        return NextResponse.json({message:"success", data: data}, {status: 201})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, {status: 500});
    }
}