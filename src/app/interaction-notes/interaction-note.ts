import { CallbackInfo } from '../callback-details/callback-info';

export class InteractionNote {
    id: string;
    caller: string;
    callbackPhoneNumber: string;
    auth: boolean;
    authMethod: Number;
    authInfo: string;
    accPhoneNumber: string;
    accRef: string;
    comments: string;
    date: Date;
    requiresFollowUp:boolean;
    callbackInfo: CallbackInfo;

    constructor (){
        this.id = "";
        this.caller = "";
        this.callbackPhoneNumber = "";
        this.accPhoneNumber = "";
        this.accRef = "";
        this.auth = false;
        this.authMethod = 0;
        this.authInfo = "";
        this.comments = "";
        this.date = new Date();
        this.requiresFollowUp = false;
        this.callbackInfo = new CallbackInfo(this.id);
        this.callbackInfo.updateToSameInfo(this);
    }
    hasFollowUpForToday(){
        return this.callbackInfo.isForToday();
    }

}
