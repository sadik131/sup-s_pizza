import Catagory from "@/app/model/catagory";
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lip/mongodb";

export async function POST(req) {
    const data = await req.json()
    await connectMongoDB()
    try {
        const result = await Catagory.create(data)
        return NextResponse.json({
            message: "Successfully create",
            result
        })

    } catch (error) {
        console.log(error)
    }

}

export async function GET(req) {
    await connectMongoDB()
    try {
        const doc = await Catagory.find({})
        return NextResponse.json({
            message: "Successfully create",
            doc
        })
    } catch (error) {
        console.log(error)
    }
}

export async function DELETE(req) {
    const { id } = await req.json()
    console.log(id)
    await connectMongoDB()
    try {
        const result = await Catagory.deleteOne({ _id: id })

        return NextResponse.json({
            message: "delete",
            status:true,
            result
        })
    } catch (error) {
        console.log(error)
    }
}

export async function PUT(req) {
    const { id ,name} = await req.json()
    console.log(name)
    return NextResponse("okk")
}