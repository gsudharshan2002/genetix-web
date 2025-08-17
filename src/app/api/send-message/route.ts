import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Set SendGrid API Key from .env.local
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    console.log("➡️ API called");

    // Parse the JSON body from the request
    const { name, email, category, message } = await req.json();
    console.log("📩 Data received:", { name, email, category, message });

    // Validate required fields
    if (!name || !email || !category || !message) {
      console.log("❌ Missing required fields");
      return NextResponse.json(
        { success: false, message: "Missing required fields ❌" },
        { status: 400 }
      );
    }

    // Prepare the email
    const msg = {
      to: process.env.EMAIL_TO as string,     // Your inbox
      from: process.env.EMAIL_FROM as string, // Verified sender in SendGrid
      replyTo: email,                         // So you can reply directly to visitor
      subject: `New ${category} project inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Category: ${category}
        Message: ${message}
      `,
    };

    // Send email via SendGrid
    await sgMail.send(msg);
    console.log("✅ Email sent successfully");

    return NextResponse.json({
      success: true,
      message: "Message sent successfully ✅",
    });
  } catch (error: any) {
    console.error("🔥 SendGrid Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message ❌",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
