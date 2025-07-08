import { connectToDatabase } from "@/lib/db";
import User from "@/models/User"; // This should be your Mongoose model

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch all users, excluding password field for security
    const users = await User.find({}, { password: 0 });

    return Response.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
