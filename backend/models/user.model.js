import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true   // ensures consistent storage
    },
    phoneNumber: {
        type: String,     // better than Number for phone
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "recruiter"],
        required: true
    },

    profile: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String },  // file URL
        resumeOriginalName: { type: String },

        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company"        // FIXED MODEL NAME
        },

        profilePhoto: {
            type: String,
            default: ""
        }
    }

}, { timestamps: true });

export const User = mongoose.model("User", UserSchema);
