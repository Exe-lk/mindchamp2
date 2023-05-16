import * as mongodb from "mongodb";
 
export interface Music {
    uid:string;
    starPoints:number,
    currentLevel:string,
    sublevel:number;
    _id?: mongodb.ObjectId;
}