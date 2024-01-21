import MenuItem from "@/app/model/manuItem"
import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lip/mongodb"

// UPLOAD NEW ITEM
export async function POST(req) {
  await connectMongoDB()
  const data = await req.json()
  try {
    const result = await MenuItem.create(data)
    return NextResponse.json({
      success: true,
      result
    })
  } catch (error) {
    console.log(error)
  }
}