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
  notes:InteractionNote[];
  filteredNotes:InteractionNote[];
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
        console.log("Filtered");
        console.log(note.callbackInfo.date);
        this.filteredNotes.push(note);
      }
    });
  }
}
