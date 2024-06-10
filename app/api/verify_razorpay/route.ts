import { createHmac } from "crypto";
import { NextResponse } from "next/server";


export async function POST(req: Request){

    try {
        const body = await req.json( ) ; 
        const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = body ;
        const sha = createHmac("sha256", process.env.RAZOR_SECRET || '')
        sha.update(`${razorpay_order_id}|${razorpay_payment_id}`)
        const digest = sha.digest("hex") ;
        if(digest !== razorpay_signature){
            return NextResponse.json({message: 'payment invalid'}, {status: 400})
        }

        return NextResponse.json({message:'valid payment' , order_id: razorpay_order_id, payment_id: razorpay_payment_id}, {status:200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'something wrong'}, {status: 404})
    }
}