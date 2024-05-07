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
    html: `
    <div style="max-width: 900px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <h1 style="color: #333;">OurSouls Password Reset</h1>
        <p style="color: #666;">You are receiving this email because a request to reset the password for your OurSouls account has been initiated. If you did not request this, please ignore this email.</p>
        
        <p style="color: #666;">To reset your password and verify your email address, please enter the PIN provided:</p>
        
        <p style="color: #666;text-align: center; background-color: gray; color: white;padding: 8px">PIN: <span style="font-weight: bold; font-size: 18px;">${pin}</span></p>
        
        <p style="color: #666;">Please note that the PIN provided is valid for 5 mins. After this time, you will need to request a new PIN.</p>
        
        <p style="color: #666;">Thank you for choosing OurSouls.</p>
        
        <div style=" margin-top: 20px;">
            <p>Best regards,<br>The OurSouls Team</p>
        </div>
    </div>
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