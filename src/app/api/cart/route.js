import Cart from "@/app/model/cart";
import { connectMongoDB } from "../../../../lip/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectMongoDB()
    try {
        const result = await Cart.find()
        return NextResponse.json({
            status: "success",
            result
        })
    } catch (error) {
        return NextResponse({
            status: "faild",
            message: "can't get data"
        })
    }
}

// post all in a cart
export async function POST(req) {
    await connectMongoDB()
    const { item, user } = await req.json()

    try {
        const result = await Cart.create({ 
            name: item.name, image: item.image, price: item.price, customerId: user._id 
        })
        console.log(result, "result")
        return NextResponse.json({
            status: "success",
            message: "Successfully add cart",
            // result
        })
    } catch (error) {
        return NextResponse.json({
            status: "faild",
            message: "Failed to cart",
            error
        })
    }
}