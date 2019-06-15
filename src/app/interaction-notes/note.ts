import { CallbackInfo } from '../callback-details/callback-info';

export interface Note {
    id: string;
    caller: string;
    callbackPhoneNumber: string;
    auth: boolean;
    authMethod: Number;
    authInfo: string;
    accPhoneNumber: string;
    accRef: string;
    comments: string;
    date: string;
    requiresFollowUp:boolean;
    callbackInfo: CallbackInfo;
}
