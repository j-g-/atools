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
    cbWindowStartTime:Time;
    cbWindowEndTime:Time;
    date:Date;

    constructor(refNoteId:string){
        this.useSameInfo = true;
        this.cbWindowStartTime = {hours: 12,minutes: 0};
        this.cbWindowEndTime = {hours: 12,minutes: 0};
        this.date = new Date();
        this.completed = false;
        this.refNoteId = refNoteId;
        //this.updateToSameInfo();
    }

    updateToSameInfo(refNote:InteractionNote){
        this.contact = refNote.caller;
        this.accRef = refNote.accRef;
        this.callbackPhoneNumber = this.callbackPhoneNumber;
        this.comments = this.comments;
    }

}
