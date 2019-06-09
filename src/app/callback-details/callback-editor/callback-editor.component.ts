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
  constructor(private notesService:IneractionNotesService) { }

  ngOnInit() {
    this.callbackInfo = this.notesService.currentNote.callbackInfo;
    this.currentNote = this.notesService.currentNote;
    this.quickDates = [new Date()]; 
    for (var i = 0; i<4 ; i++){
      var d = this.quickDates[i].getDate() + 1;
      var date  = new Date();
      date.setDate(d);
      this.quickDates.push(date);
    }
  }
  setQuickDate(index:number){
    this.callbackInfo.date = this.quickDates[index];
  }
}
