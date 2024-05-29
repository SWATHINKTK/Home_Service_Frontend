import { IService } from "./service";
import { IUser } from "./user";
import { IWorker } from "./worker";

export interface IBooking {
    splice(arg0: number, index: number): IBooking[];
    _id?:string;
    userId:string | IUser;
    workerId?:string | IWorker;
    serviceId:string | IService;
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