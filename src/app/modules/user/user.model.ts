import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String, required: true
        },
        middleName: {
            type: String, required: true
        },
        lastName: {
            type: String, required: true
        },
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String, required: true
    },
    email: {
        type: String
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    },
})

const User = model<IUser>('User', userSchema);

export default User