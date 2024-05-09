export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    district: string;
    phoneNumber: string;
    password: string;
    confirmPassword?: string;
    userEnteredOTP?:string;
    createdAt?:Date;
    updatedAt?:Date;
    profile?:string;
}


export interface IUserUpdateData {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    district: string;
    profile: File; 
}

