import { Component, OnInit } from '@angular/core';
import { IneractionNotesService } from 'src/app/interaction-notes/ineraction-notes.service';
import { InteractionNote } from 'src/app/interaction-notes/interaction-note';
import { CallbackInfo } from '../callback-info';

@Component({
  selector: 'app-callbacks-board',
  templateUrl: './callbacks-board.component.html',
  styleUrls: ['./callbacks-board.component.css']
})
export class CallbacksBoardComponent implements OnInit {
  filteredNotes:InteractionNote[][];
  count:number;
  _subscription: any;


  constructor(private notesService:IneractionNotesService) {
    this.filter();
    this._subscription = 
      notesService.currentNoteChange.subscribe((value) =>{
        this.filter();
      });
  }

  ngOnInit() {
    this.filter();
  }
  filter(){
    let notes = this.notesService.notes;
    this.filteredNotes = [];
    this.count =0;
    for (let index = 0; index < 3; index++) {
      this.filteredNotes.push([]);
    }
    notes.forEach((note)=>{
      if(note.requiresFollowUp){
        this.count++;
        console.log("Filtered");
        console.log(note.callbackInfo.date);
        note.callbackInfo.updateSeverity();
        this.filteredNotes[note.callbackInfo.severity -1].push(note);
      }
    });
  }
}
