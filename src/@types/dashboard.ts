import { IBooking } from "./booking";
import { IWorker } from "./worker";

// Dashboard Recent Data Type Declaration.
interface IBookingsRecent {
    bookings: IBooking[];
    currentPage: number;
    totalPages: number;
    totalDocuments: number;
}

interface IWorkersRecent {
    workers: IWorker[];
    currentPage: number;
    totalPages: number;
    totalDocuments: number;
}

export interface IDashboardRecentData {
    bookingsRecent: IBookingsRecent;
    workersRecent: IWorkersRecent;
}

// Dashboard Chart Type Declaration.
export interface ICountByDate {
    _id: {
        year: number;
        month: number;
    };
    count: number;
}

export interface IServicePercentage {
    serviceId: string;
    count: number;
    serviceName: string;
    percentage: number;
}

export interface IDashboardChartData {
    usersCount: ICountByDate[];
    bookingCount: ICountByDate[];
    servicePercentage: IServicePercentage[];
}


export interface IPerformanceUserAndWorker{
    _id:string;
    sum:number;
    name:string;
    email:string;
    phoneNumber:string;
}
