export interface ISlot{
    date:Date | undefined,
    startTime:string | undefined,
    endTime:string| undefined
}

export interface IAddress{
    buildingName:string;
    phoneNumber:string;
    location?:{
        longitude:number;
        latitude:number;
    },
    locationDetails?:string
}