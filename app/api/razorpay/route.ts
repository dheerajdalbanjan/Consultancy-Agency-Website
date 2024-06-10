
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay'

export async function POST(req: Request){
    const razorpay = new Razorpay({key_id: process.env.RAZOR_KEY_ID || '', key_secret: process.env.RAZOR_SECRET}) ;
    try {
        const options = await req.json() ; 

        const order = await razorpay.orders.create(options) ;
        console.log(order)

        return NextResponse.json({message:"Order created.", order: order}, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error while creating order."}, {status:400})
    }
}