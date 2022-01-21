import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: { type: String },
});

const User = mongoose.model("User", userSchema);

export default User;
