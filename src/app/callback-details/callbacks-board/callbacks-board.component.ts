import { Component, OnInit } from '@angular/core';
import { IneractionNotesService } from 'src/app/interaction-notes/ineraction-notes.service';
import { InteractionNote } from 'src/app/interaction-notes/interaction-note';

@Component({
  selector: 'app-callbacks-board',
  templateUrl: './callbacks-board.component.html',
  styleUrls: ['./callbacks-board.component.css']
})
export class CallbacksBoardComponent implements OnInit {
  notes:InteractionNote[];
  filteredNotes:InteractionNote[];
  followUpCount:number = 0 ;
  _subscription: any;


  constructor(private notesService:IneractionNotesService) {
    this.notes = notesService.notes;
    this._subscription = 
      notesService.currentNoteChange.subscribe((value) =>{
        this.filter();
      });
  }

  ngOnInit() {
    this.filter();
  }
  filter(){
    this.filteredNotes = [];
    this.notes.forEach((note)=>{
      if(note.requiresFollowUp){
        console.log(note.callbackInfo);
        //let test:boolean = note.callbackInfo.isForToday();
        this.filteredNotes.push(note);
        this.followUpCount = this.filteredNotes.length;
      }
    });
  }
  hasTodayFollowUp(note:InteractionNote){
    var d: Date = new Date();
    var dd = new Date();
    dd.setMilliseconds(Date.parse(note.callbackInfo.date as unknown as string));
    return  (
      d.getMilliseconds() <=
      dd.getMilliseconds()
    ) ? true : false;
  }
}
