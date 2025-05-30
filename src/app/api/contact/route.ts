import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Environment variables for email configuration
// These should be set in your .env.local file
const EMAIL_USER = process.env.EMAIL_USER || 'abhimanyu.malik.86@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587');
const RECIPIENT_EMAIL = 'BerardiA@hcdsb.org'; // Fixed recipient email

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message, phone, occupation, experience, availability, interests } = body;
    
    // Check if this is a mentor application
    const isMentorApplication = subject === 'Mentor Application';
    
    // Validate form inputs
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }
    
    // Additional validation for mentor applications
    if (isMentorApplication && (!occupation || !experience || !availability)) {
      return NextResponse.json(
        { error: 'Occupation, experience, and availability are required for mentor applications' },
        { status: 400 }
      );
    }
    
    // Validation for contact forms
    if (!isMentorApplication && (!subject || !message)) {
      return NextResponse.json(
        { error: 'Subject and message are required' },
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
    
    // Determine email type for subject line
    const emailSubject = isMentorApplication ? `Mentor Application: ${firstName} ${lastName}` : `Website Contact: ${subject}`;
    
    // Prepare email content based on form type
    let textContent, htmlContent;
    
    if (isMentorApplication) {
      textContent = `MENTOR APPLICATION
      
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Current Occupation: ${occupation}
Availability: ${availability}
Areas of Interest: ${interests || 'Not specified'}

Relevant Experience:
${experience}

Additional Information:
${message || 'None provided'}`;

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c00000;">New Mentor Application</h2>
          <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Applicant Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Current Occupation:</strong> ${occupation}</p>
            <p><strong>Availability:</strong> ${availability}</p>
            <p><strong>Areas of Interest:</strong> ${interests || 'Not specified'}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333;">Relevant Experience</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #c00000;">
              ${experience.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          ${message ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333;">Additional Information</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #c00000;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}
          
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            This mentor application was submitted through the FRC 9562 Royal Robotics website.
          </p>
        </div>
      `;
    } else {
      textContent = `CONTACT FORM SUBMISSION
      
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

      htmlContent = `
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
      `;
    }
    
    // Prepare email content
    const mailOptions = {
      from: `"FRC 9562 Royal Robotics" <${EMAIL_USER}>`, // Sender
      replyTo: email, // Form submitter's email
      to: RECIPIENT_EMAIL, // Recipient email
      subject: emailSubject,
      text: textContent,
      html: htmlContent
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
