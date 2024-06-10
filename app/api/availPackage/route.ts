import { NextRequest, NextResponse } from "next/server";

type dataType = {
  name: string,
  email: string,
  message: string
}

const nodemailer = require('nodemailer')

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data)


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
    subject: `Package avail mail`,
    text: text
  };


  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return NextResponse.json({message: "success"}, {status:200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "failed"}, {status:500})
  }
}