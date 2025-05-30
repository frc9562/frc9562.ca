import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Environment variables for email configuration
// These should be set in your .env.local file
const EMAIL_USER = 'abhimanyu.malik.86@gmail.com'; // Fixed sender email
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587');
const GMAIL_RECIPIENT = 'BerardiA@hcdsb.org'; // Fixed recipient email

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;
    
    // Validate form inputs
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    if (!EMAIL_PASS) {
      console.warn('Email password not configured. Email not sent.');
      return NextResponse.json(
        { error: 'Email service not fully configured. Contact administrator.' },
        { status: 500 }
      );
    }
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false,
      },
    });
    
    // Prepare email content
    const mailOptions = {
      from: `"FRC 9562 Website" <${EMAIL_USER}>`, // Sender
      replyTo: email, // Form submitter's email
      to: GMAIL_RECIPIENT, // Recipient (staff/Gmail address)
      subject: `Website Contact: ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c00000;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #c00000;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            This email was sent from the FRC 9562 Royal Robotics website contact form.
          </p>
        </div>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
