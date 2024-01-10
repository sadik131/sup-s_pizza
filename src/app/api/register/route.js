import User from "@/app/model/userModel";
import { NextRequest ,NextResponse} from "next/server";
import { connectMongoDB } from "../../../../lip/mongodb";
const bcrypt = require('bcrypt');


export async function POST(req) {
  try {
    await connectMongoDB()
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
   const user = await User.create({name, email, password:hashedPassword})
   console.log(user)

    return NextResponse.json({ message: "User registered",user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user", error },
      { status: 500 }
    );
  }
}
