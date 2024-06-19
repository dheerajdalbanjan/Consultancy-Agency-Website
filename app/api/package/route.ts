import { connectMongo } from "@/libs/mongodb";
import Package from "@/model/package";
import { NextAuthOptions, getServerSession } from "next-auth";
import {  NextResponse } from "next/server";
import mongoose from "mongoose";
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/model/user";

interface CustomUser {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    phone : string
  }


  
const authOption: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        id: "credentials",
        credentials: {},
        async authorize(credentials: any) {
          console.log('ara bhai ')
          const { email, password } = (credentials as any)
  
          try {
            // ... authentication logic
            const db = await connectMongo();
  
            const user = await User.findOne({ email: email })
            if (!user) {
              throw new Error('Email not found')
            }
            const passMatch = await bcrypt.compare(password, user?.password)
            if (!passMatch) {
              throw new Error('Password did not match')
            }
            return user;
          } catch (error) {
            console.error("Authentication error:", error);
            if ((error as Error).message === 'Email not found' || (error as Error).message === 'Password did not match') {
              throw error; // Pass along the original error
            } 
            else if((error as Error).message === 'Email not found' && (error as Error).message === 'Password did not match'){
              throw new Error('Invalid credentials')
            }else {
              throw new Error('Something went wrong'); // For other unexpected errors
            }
          }
        }
  
  
  
      })
    ],
    session: {
      strategy: "jwt"
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token, user }) {
        if (session && session.user) {
          (session.user as CustomUser).id = token.id as string;
        }
        
        return session;
      }
    },
    
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/login'
    }
  
  }
  
  
  

export async function POST(req: Request){

  const data = await req.json() ;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: false,

    auth: {
      user: 'oursouls04@gmail.com',
      pass: 'yxfp jkvh amay fvig'
    }
  });


  let text = ""

  Object.keys(data).map((e)=>text += `${e}: ${data[e]}\n`)

  const mailOptions = {
    from: data.email,
    to: 'oursouls04@gmail.com',
    subject: `Package purchase mail`,
    text: text
  };


    try {
        
        connectMongo() ;
        Package.create(data) ;
        const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

        return NextResponse.json({message:"successfully created package"}, {status:200})
    } catch (error) {
        return NextResponse.json({message:"Failed to add package"}, {status: 400})
    }
}


export async function GET(req:Request) {
    const session = await getServerSession(authOption);

    if (!session || !(session as any)?.user) {
        return NextResponse.json({ message: 'Not authenticated' }, {status: 404});
    }

    try {
        await connectMongo() ;
        const userId = new mongoose.Types.ObjectId(session.user.id);
        const data = await Package.find({ user_id: userId });

        console.log(data);

        return NextResponse.json({message:"success", data: data}, {status: 201})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, {status: 500});
    }
}