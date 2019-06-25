import { Component, OnInit } from '@angular/core';
import { IneractionNotesService } from "../ineraction-notes.service";
import { InteractionNote } from "../interaction-note";

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {
  currentNote: InteractionNote;
  _subscription: any;
  summaryOptions:any;

  constructor(private notesService: IneractionNotesService) { 
    this.currentNote = notesService.currentNote;
    this._subscription = 
      notesService.currentNoteChange.subscribe((value) =>{
        this.currentNote = value;
      });
    this.summaryOptions = notesService.summaryOptions;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
   //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }
  toggleShowAuth(){
    this.summaryOptions.showAuth = !this.summaryOptions.showAuth;
  }
}
