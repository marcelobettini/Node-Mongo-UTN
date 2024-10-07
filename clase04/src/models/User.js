import mongoose from "mongoose"
const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true, min: 2, max: 25 },
    lastName: { type: String, required: true, trim: true, min: 2, max: 20 },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

export const User = mongoose.model("User", UserSchema)