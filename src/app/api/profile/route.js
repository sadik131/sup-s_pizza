import User from "@/app/model/userModel"
import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lip/mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

// UPDATE INFO OF USER
export async function POST(req) {
    const data = await req.json()
    console.log(data)
    const email = data.email
    try {
        await connectMongoDB()
        const result = await User.updateOne({ email }, data, { new: true })
        if (result.modifiedCount === 1) {
            const updateDoc = await User.findOne({ email })
            return NextResponse.json({ updateDoc,status:true, message: "user upladted" })
        }
    } catch (error) {
        console.log(error, "err")
    }
}

// GET THE USER BY EMAIL
export async function GET(req) {
    try {
        await connectMongoDB()
        const session = await getServerSession(authOptions)
        const user = await User.findOne({ email: session?.user?.email })
        return NextResponse.json({
            message: "find",
            user
        })
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