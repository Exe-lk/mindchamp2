import * as mongodb from "mongodb";

export interface Painting{
    uid: string;
    current_state:string;
    last_unlock_p:string;
    star_points:number;
    level:"Beginner" |"Intermediate" | "Advanced";
    Beginner:{
        fill_color:{
            bp1:string,
            bp2:string,
            bp3:string,
            bp4:string,
            bp5:string,
        }
    };
    Intermediate:{
        fill_color:{
            Ip1:[string,string],
            Ip2:[string,string],
            Ip3:[string,string],
            Ip4:[string,string],
            Ip5:[string,string],
        }
    };
    Advanced:{
        fill_color:{
            Ap1:[string,string,string],
            Ap2:[string,string,string],
            Ap3:[string,string,string],
            Ap4:[string,string,string],
            Ap5:[string,string,string],
        }
    };
    _id?: mongodb.ObjectId;
}

