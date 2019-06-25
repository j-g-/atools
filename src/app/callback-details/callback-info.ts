import { InteractionNote } from '../interaction-notes/interaction-note';
import { Time, DatePipe, formatDate} from '@angular/common';

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
    severity:number;
    private datePipe: DatePipe;
    constructor(refNoteId:string){
        this.useSameInfo = true;
        let d = new Date();
        this.date = formatDate(d,'yyyy-MM-dd', 'en-US');
        this.cbWindowStartTime = formatDate(d,'HH:mm', 'en-US');
        d.setHours(d.getHours()+1);
        this.cbWindowEndTime =  formatDate(d,'HH:mm', 'en-US');
        this.completed = false;
        this.refNoteId = refNoteId;
        this.severity= 2;
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
    parseTime(time:string){
        let s = time.split(":");
        return [Number.parseInt(s[0]),Number.parseInt(s[1])];
    }
    updateSeverity(){
        let d = new Date();
        let sd = new Date(Date.parse(this.date));
        let ed = new Date(Date.parse(this.date));
        let ts = this.parseTime(this.cbWindowStartTime);
        let te = this.parseTime(this.cbWindowEndTime);
        sd.setHours(ts[0],ts[1],0,0);
        ed.setHours(te[0],te[1],0,0);
        this.severity = 3;
        if ( d > sd  && d < ed){
            //console.log(d.getUTCMilliseconds(),sd.getUTCMilliseconds());
            this.severity=2;
            console.log("This is severity 2")
        }
        if ( d > ed){
            //console.log(d.getMilliseconds(),sd.getMilliseconds());
            this.severity=1;
            console.log("This is severity 1")
        }
        console.log("now",d,"start", sd, "end",ed);
        
    }
}
