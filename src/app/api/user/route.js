import User from "@/app/model/userModel"
import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lip/mongodb"

// GET ALL THE USER
export async function GET() {
    
    try {
        await connectMongoDB()
        const users = await User.find({})
        return NextResponse.json(users)
    } catch (error) {
        console.log(error)
    }
}