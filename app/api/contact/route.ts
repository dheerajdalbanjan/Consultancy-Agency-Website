import { NextRequest } from "next/server";

type dataType ={
    name: string ,
    email: string , 
    message: string 
}

const nodemailer = require('nodemailer')

export async function POST(req: NextRequest){
    const data  = await req.json();
    console.log(data)

    const {name, email, message}  = data; 

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
  secure: false,
    
    auth: {
      user: 'oursouls04@gmail.com',
      pass: 'vtcm lbww uaik lxbb'
    }
  });

  const mailOptions = {
    from: email,
    to: 'oursouls04@gmail.com',
    subject: `${name} tried to contact you with ${email}`,
    text: message
  };

  

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return new Response('Success', {status: 200});
} catch (error) {
    console.log(error);
    return new Response('Error', {status: 500});
}
}