import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import mongoose, { Schema, model } from 'mongoose'

const app: Application = express()



const corsFonfig = {
    origin: true,
    credentials: true,
}
app.use(express.json())
app.use(cors(corsFonfig));
app.options('*', cors(corsFonfig));
app.use(express.urlencoded({ extended: true }))


app.get('/', (req: Request, res: Response, next: NextFunction) => {


    interface IUser {
        id: string;
        role: 'student',
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string;
        };
        dateOfBirth: Date;
        gender: 'Male | Female';
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    // creating a schema using interface

    const userSchema = new Schema<IUser>({
        id: { type: String, required: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
        name: {
            firstName: { type: String, required: true },
            middleName: { type: String, required: true },
            lastName: { type: String, required: true },
        },
        dateOfBirth: { type: Date, required: true },
        gender: { type: String, required: true },
        email: { type: String },
        contactNo: { type: String, required: true },
        emergencyContactNo: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true },
    })

    const User = model<IUser>('User', userSchema);

    const createUserToDB = async () => {

        const user = new User({
            id: '1e23',
            role: 'student',
            password: '123',
            name: {
                firstName: 'Imran',
                middleName: 'Hossen',
                lastName: 'imru',
            },
            dateOfBirth: new Date(),
            gender: 'Male',
            email: 'student@gmail.com',
            contactNo: '1234567890',
            emergencyContactNo: '1234567890',
            presentAddress: 'Delhi',
            permanentAddress: 'Delhi',
        })

        await user.save();
        console.log(user);
    }

    createUserToDB ();
})

export default app
