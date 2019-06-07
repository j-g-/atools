import { InteractionNote } from '../interaction-notes/interaction-note';
import { Time } from '@angular/common';

export class CallbackInfo {
    useSameInfo:boolean;
    refNote:InteractionNote;
    contact:String;
    accRef:String;
    comments:String;
    callbackPhoneNumber:String;
    completed:boolean;
    cbWindowStarTime:Time;
    cbWindowEndTime:Time;
    date:Date;

    constructor(refNote:InteractionNote){
        this.useSameInfo = true;
        this.updateToSameInfo();
        this.cbWindowStarTime = {hours: 12,minutes: 0};
        this.cbWindowEndTime = {hours: 12,minutes: 0};
        this.date = new Date();
        this.completed = false;
    }

    updateToSameInfo(){
        this.contact = this.refNote.caller;
        this.accRef = this.refNote.accRef;
        this.callbackPhoneNumber = this.refNote.callbackPhoneNumber;
        this.comments = this.refNote.comments;
    }

}
