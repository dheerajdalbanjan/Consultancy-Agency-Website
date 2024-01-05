import { NextRequest } from "next/server";

type dataType = {
  name: string,
  email: string,
  message: string
}

const nodemailer = require('nodemailer')

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data)

  const { name, email, category, message, pricing } = data;
  console.log(pricing)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: false,

    auth: {
      user: 'oursouls04@gmail.com',
      pass: 'yxfp jkvh amay fvig'
    }
  });

  const mailOptions = {
    from: email,
    to: 'oursouls04@gmail.com',
    subject: `Customer contact email ${pricing.length > 1 ? "Pricing" : ""}`,
    text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\nMessage: ${message}\n${pricing.length > 1 ? 'Pack = ' + pricing : ""} `
  };


  const mailOptions2 = {
    from: 'oursouls04@gmail.com',
    to: email,
    subject: "Confirmation of Contact Information Receipt - OurSoulss",
    text: `Dear ${name},

Thank you for submitting your contact information to OurSoulss. We appreciate you taking the time to reach out and share your interest in our services.

We wanted to let you know that we have received your information and have added it to our database. Someone from our team will be in touch with you shortly to discuss how we can best assist you.

In the meantime, please don't hesitate to reach out if you have any other questions. We are always happy to hear from prospective clients and help however we can.

Thank you again for considering OurSoulss. We look forward to speaking with you soon!

Sincerely,
OurSoulss
    `
  }



  try {
    const info = await transporter.sendMail(mailOptions);
    const info2 = await transporter.sendMail(mailOptions2); 
    console.log('Email sent: ' + info.response + info2.response);
    return new Response('Success', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Error', { status: 500 });
  }
}