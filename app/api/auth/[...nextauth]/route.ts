
import { connectMongo } from "@/libs/mongodb";
import User from "@/model/user";
import mongoose from "mongoose";
import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'



const authOption:NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials", 
            credentials:{}, 
            async authorize(credentials) {

              const {email, password} = (credentials as any)

                try {
                  // ... authentication logic
                  await connectMongo() ;
                  console.log(email , password)

                  const user = await User.findOne({email: email})
                  if(!user){
                    console.error('User not found')
                    return null ;
                  }
                  const passMatch = await  bcrypt.compare(password, user?.password)
                  console.log(`passmathc result: ${user?.password} `, passMatch)
                  if(!passMatch){
                    console.error('password do not match')
                    return null ;
                  }
                  return user;
                } catch (error) {
                  console.error("Authentication error:", error);
                  return null;
                }
            }

            
              
        })
    ], 
    session: {
        strategy: "jwt"
    }, 
    secret: process.env.NEXTAUTH_SECRET, 
    pages: {
        signIn: '/login'
    }

}

const handler = NextAuth(authOption)

export {handler as GET,handler as POST}