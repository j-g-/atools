import { Component, OnInit } from '@angular/core';
import { IneractionNotesService } from "../../interaction-notes/ineraction-notes.service";
import { CallbackInfo } from '../callback-info';
import { InteractionNote } from 'src/app/interaction-notes/interaction-note';
import { TimeRangePickerComponent } from "../../time-range-picker/time-range-picker.component";

@Component({
  selector: 'app-callback-editor',
  templateUrl: './callback-editor.component.html',
  styleUrls: ['./callback-editor.component.css']
})
export class CallbackEditorComponent implements OnInit {
  callbackInfo: CallbackInfo;
  currentNote: InteractionNote;
  quickDates: Date[];
  _subscription: any;
  constructor(private notesService:IneractionNotesService) {
    this.currentNote = this.notesService.getCurrentNote();
    this.callbackInfo = this.currentNote.callbackInfo;
    this._subscription = 
      notesService.currentNoteChange.subscribe((value) =>{
        this.currentNote = value;
        this.callbackInfo = this.currentNote.callbackInfo;
      });
  }
    ngOnDestroy() {
   //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }

  ngOnInit() {
    this.quickDates = [new Date()]; 
    for (var i = 0; i<4 ; i++){
      var d = this.quickDates[i].getDate() + 1;
      var date  = new Date();
      date.setDate(d);
      this.quickDates.push(date);
    }
  }
  setQuickDate(index:number){
    let d = this.quickDates[index];
    this.callbackInfo.date =  d.toDateString();
    console.log(d.toDateString());
  }
}
