import User from "@/app/model/userModel"
import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lip/mongodb"

// UPDATE INFO OF USER
export async function POST(req) {
    const data = await req.json()
    const email = data.email
    try {
        await connectMongoDB()
        const result = await User.updateOne({ email }, data, { new: true })
        return NextResponse.json({ result, message: "user upladted" })
    } catch (error) {
        console.log(error, "err")
    }
}

// GET ALL THE USER
export async function GET(req) {
    try {
        await connectMongoDB()
        const users = await User.find({})
        return NextResponse.json({ users })
    } catch (error) {
        console.log(error)
    }
}

// MAKE USER TO ADMIN
export async function PUT(req) {
    await connectMongoDB()
    const id = await req.json()
    try {
        const user = await User.updateOne({ _id: id }, { isAdmin: true }, { upsert: true })
        console.log(user)
        return NextResponse.json({
            message: "okk", user
        })
    } catch (error) {
        console.log(error)
    }
}

// DELETE USER
export async function DELETE(req) {
    await connectMongoDB()
    const id = await req.json()
    try {
        const user = await User.deleteOne({ _id: id })
        console.log(user)
        return NextResponse.json({
            message: "okk", user
        })
    } catch (error) {
        console.log(error)
    }
}