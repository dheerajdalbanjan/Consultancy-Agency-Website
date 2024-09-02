import { connectMongo } from "@/libs/mongodb";
import Package from "@/model/package";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectMongo();

    // const users = await User.find();

    // users.forEach( async (e, i) => {
    //   const signUpBonus = {
    //     type: "Sign Up Package",
    //     mode: "starter",
    //     name: "30 Minute Session Package (Sign Up)",
    //     price: "0",
    //     sessions_included: "1 session",
    //     session_length: "30 mins",
    //     counselor_matching: "non-professional",
    //     video: "89",
    //     features: ["Single 30-minute session.", "Non-professional counselor."],
    //     order_id: "ffff",
    //     payment_id: "ffff",
    //     user_id: e._id,
    //   };

    //   await Package.create(signUpBonus) ; 
    // });

    // await Package.deleteMany({order_id: "ffff"}) ;

    return NextResponse.json({ message: "Updated packages" }, { status: 200 });
  } catch (error) {
    console.error("Error updating packages:", error);
    return NextResponse.json(
      { message: "Couldn't update packages" },
      { status: 400 }
    );
  }
}
