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

  constructor(private notesService: IneractionNotesService) { 
  }
  ngOnInit() {
    this.currentNote = this.notesService.currentNote;
  }
}
