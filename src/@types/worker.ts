

export interface IWorker{
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
    certificate?:File;
    idProof?:File;
}