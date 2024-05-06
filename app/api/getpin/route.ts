import { NextRequest } from "next/server";

const nodemailer = require('nodemailer');

function generateRandomPIN() {
    // Generate a random number between 100000 and 999999
    const pin = Math.floor(100000 + Math.random() * 900000);
    return pin.toString(); // Convert the number to a string
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const {email} = data ;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: false,

    auth: {
      user: 'oursouls04@gmail.com',
      pass: 'yxfp jkvh amay fvig'
    }
  });

  const pin = generateRandomPIN() ;
 


  const mailOptions = {
    from: 'oursouls04@gmail.com',
    to: email,
    subject: "Verify Your Email Address and Reset Your Password",
    text: `    Dear OurSoulss User,

    You are receiving this email because a request to reset the password for your OurSouls account has been initiated. If you did not request this, please ignore this email.
    
    To reset your password and verify your email address, please enter the PIN provided:
    
    PIN: ${pin}
    
    Please note that the PIN provided is valid for 5 mins. After this time, you will need to request a new PIN.
    
    Thank you for choosing OurSouls.
    
    Best regards,
    The OurSouls Team
    `
  }


  const response = JSON.stringify({
    message: "success", 
    pin: pin
  })

  try {
    const info = await transporter.sendMail(mailOptions); 
    console.log('Email sent: ' + info.response);
    return new Response(response, { status: 200 } );
  } catch (error) {
    console.log(error);
    return new Response('Error', { status: 500 });
  }
}