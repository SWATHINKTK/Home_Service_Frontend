export interface ISlot{
    date:Date | undefined,
    startTime:string | undefined,
    endTime:string| undefined
}

export interface IAddress{
    _id:string;
    buildingName:string;
    phoneNumber:string;
    location?:{
        coordinates: [number, number];
    },
    locationDetails?:string
}