import * as mongodb from "mongodb";
 
export interface BasicLevel {
    fillcolors :[string,string,string,string,string],
    lastUnlock :number,
    state : "Inprogress" | "Completed" | "Lock",
    addStarPoint : number,
   _id?: mongodb.ObjectId;
}