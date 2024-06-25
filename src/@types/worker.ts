import { IService } from "../components/Admin/Services/ServiceTable";

export interface IWorker{
    _id?:string,
    username: string;
    email: string;
    phoneNumber: string;
    service: string | IService;
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
    profile?:string;
}


export interface IWorkerExtraInfo{
    certificate: string;
    createdAt: string;
    experience: number;
    idProof: string;
    qualification: string;
    updatedAt: string;
    workerId: string;
    __v: number;
    _id: string;
}
