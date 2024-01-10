import User from "@/app/model/userModel"
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email } = await req.body
        console.log(email)
        const user = await User.find({ email:email }).select("_id")
        console.log("user: ", user);
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({message:"wrong"})
    }
}