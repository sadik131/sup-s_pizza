import User from "@/app/model/userModel"

// GET ALL THE USER
export async function GET(req) {
    try {
        await connectMongoDB()
        const users = await User.find({})
        const session = await getServerSession(authOptions)
        console.log(session)
        return NextResponse.json({ users })
    } catch (error) {
        console.log(error)
    }
}