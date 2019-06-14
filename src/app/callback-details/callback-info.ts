import { InteractionNote } from '../interaction-notes/interaction-note';
import { Time } from '@angular/common';

export class CallbackInfo {
    useSameInfo:boolean;
    refNoteId:string;
    contact:String;
    accRef:String;
    comments:String;
    callbackPhoneNumber:String;
    completed:boolean;
    cbWindowStartTime:string;
    cbWindowEndTime:string;
    date:string;

    constructor(refNoteId:string){
        this.useSameInfo = true;
        let d = new Date();
        this.date = d.toISOString();
        //this.date.getHours;
        //let h = this.date.getHours();
        //let m = this.date.getMinutes();
        //this.cbWindowStartTime = `${h}:${m}`;
        //this.cbWindowEndTime =  `${h}:${m}`;
        this.cbWindowStartTime = "12:00";
        this.cbWindowEndTime =  "12:00";
        this.completed = false;
        this.refNoteId = refNoteId;
        //this.updateToSameInfo();
    }
    isToday(){
        let today = new Date();
        today.setHours(0,0,0,0);
        let d = new Date(this.date);
        d.setHours(0,0,0,0);
        return d.getTime() == today.getTime();
    }

    updateToSameInfo(refNote:InteractionNote){
        this.contact = refNote.caller;
        this.accRef = refNote.accRef;
        this.callbackPhoneNumber = this.callbackPhoneNumber;
        this.comments = this.comments;
    }
}
