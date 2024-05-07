export interface IWorker{
    _id?:string,
    username: string;
    email: string;
    phoneNumber: string;
    service: string;
    district: string;
    location: string;
    qualification: string;
    experience: number;
    password?: string;
    confirmPassword?:string;
    certificate?:File | string;
    idProof?:File | string;
    fireBaseAuth?:unknown;
    _isBlocked?:boolean;
    _isVerified?:boolean;
    createdAt?:string;
}
