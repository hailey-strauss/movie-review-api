import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Unique ID generator
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4, // Assign a unique ID
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
