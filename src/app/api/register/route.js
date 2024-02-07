import User from "@/app/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lip/mongodb";
const bcrypt = require('bcrypt');


export async function POST(req) {
  await connectMongoDB()
  const { name, email, password } = await req.json();

  try {
    const emailEx = await User.findOne({ email })

    if (!emailEx) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword })
      return NextResponse.json({ message: "User registered", status: true, result: user });
    } else {
      return NextResponse.json({ status: false, message: "User already exist" })
    }

  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user", error },
      { status: 500 }
    );
  }
}
