import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json({ message: "Missing fields" }, { status: 400 });
    }

    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 401 });
    }

    const isPasswordMatch = user.password === password; // In production, use bcrypt

    if (!isPasswordMatch) {
      return Response.json({ message: "Incorrect password" }, { status: 401 });
    }

    return Response.json({ message: "Login successful", user });
  } catch (error) {
    console.error("Sign-in error:", error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
