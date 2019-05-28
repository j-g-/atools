export class InteractionNote {
    caller: string;
    callbackPhoneNumber: string;
    auth: boolean;
    authMethod: Number;
    authInfo: string;
    accPhoneNumber: string;
    accRef: string;
    comments: string;
    date: Date;
    constructor (){
        this.caller = "";
        this.callbackPhoneNumber = "";
        this.accPhoneNumber = "";
        this.accRef = "";
        this.auth = false;
        this.authMethod = 0;
        this.authInfo = "";
        this.comments = "";
        this.date = new Date();
        
    }
}
