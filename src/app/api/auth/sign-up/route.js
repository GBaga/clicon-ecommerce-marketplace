import { connectToDatabase } from "@/lib/db";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function POST(req) {
  const { email, password } = await req.json();

  await connectToDatabase();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return Response.json({ message: "User already exists" }, { status: 400 });
  }

  const newUser = await User.create({ email, password });
  return Response.json({ message: "User created" }, { status: 201 });
}

export async function GET() {
  try {
    await connectToDatabase();

    const users = await User.find({}, { password: 0 }); // exclude passwords

    return Response.json(users, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
