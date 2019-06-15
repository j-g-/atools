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
  filteredNotes:InteractionNote[];
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
    notes.forEach((note)=>{
      if(note.requiresFollowUp){
        console.log("Filtered");
        console.log(note.callbackInfo.date);
        note.callbackInfo.updateSeverity();
        this.filteredNotes.push(note);
      }
    });
  }
}
