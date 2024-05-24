import { IService } from "./service";

export interface IBooking {
    splice(arg0: number, index: number): IBooking[];
    serviceInfo: IService;
    _id?:string;
    userId:string;
    workerId?:string;
    serviceId:string;
    serviceMinimumAmount:number;
    serviceHourlyCharge:number;
    buildingName: string;
    date: string;
    startTime: string;
    endTime: string;
    description: string;
    location:{
        longitude:number;
        latitude:number;
    }
    advancePaymentAmount:number;
    advancePaymentStatus?:string;
    totalAmount:number;
    workStatus?:string;
    paymentStatus?:string;
    additionalCharges?: {
        description: string;
        qty: number;
        amount: number;
    }[];
    createdAt?:string;
    updatedAt?:string;
}