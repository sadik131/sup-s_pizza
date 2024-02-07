import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lip/mongodb";
import MenuItem from "@/app/model/manuItem";

export async function GET(req, { params }) {
    const id = params.id
    try {
        await connectMongoDB()
        const result = await MenuItem.findById({ _id: id })
        return NextResponse.json({
            status: true,
            result
        })
    } catch (error) {
        return NextResponse.json({
            status: false,
            error: error.message
        })
    }

}