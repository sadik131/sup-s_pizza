import User from "@/app/model/userModel"
import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lip/mongodb"

export async function POST(req) {
    const data = await req.json()
    const email = data.email
    console.log(data)
    try {
        await connectMongoDB()
        const result = await User.updateOne({ email }, data, { new: true })
        return NextResponse.json({ result, message: "user upladted" })
    } catch (error) {
        console.log(error, "err")
    }
}