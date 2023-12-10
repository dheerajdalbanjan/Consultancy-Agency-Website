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

  

  transporter.sendMail(mailOptions, (error: any, info : any) => {
    if (error) {
      console.log(error);
      return new Response('Erro', {status: 500})
    } else {
      console.log('Email sent: ' + info.response);
      return new Response('Success', {status: 200})
    }
  });
    return new Response('okay')
}