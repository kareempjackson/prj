import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    // Send the email
    const { data, error } = await resend.emails.send({
      from: "PRJ Contact Form <no-reply@psychforracialjustice.org>",
      to: ["psych4rj@gmail.com"],
      replyTo: email,
      subject:
        `New Contact Form Submission from ${firstName} ${lastName || ""}`.trim(),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0b0d12; border-bottom: 2px solid #c94b6d; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="margin-top: 0; color: #0b0d12;">Message:</h3>
            <p style="white-space: pre-wrap; color: #333;">${message}</p>
          </div>
          
          <p style="color: #888; font-size: 12px; margin-top: 30px;">
            This message was sent from the Psychologists for Racial Justice website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 },
    );
  }
}
