import User from "./user.model";

export const createUserToDB = async () => {

    const user = await new User({
        id: '12e233',
        role: 'student',
        password: '1323',
        name: {
            firstName: 'Imrans',
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
    return user
}