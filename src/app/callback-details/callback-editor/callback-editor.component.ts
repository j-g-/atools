import { Component, OnInit } from '@angular/core';
import { IneractionNotesService } from "../../interaction-notes/ineraction-notes.service";
import { CallbackInfo } from '../callback-info';
import { InteractionNote } from 'src/app/interaction-notes/interaction-note';

@Component({
  selector: 'app-callback-editor',
  templateUrl: './callback-editor.component.html',
  styleUrls: ['./callback-editor.component.css']
})
export class CallbackEditorComponent implements OnInit {
  callbackInfo: CallbackInfo;
  currentNote: InteractionNote;
  constructor(private notesService:IneractionNotesService) { }

  ngOnInit() {
    this.callbackInfo = this.notesService.currentNote.callbackInfo;
    this.currentNote = this.notesService.currentNote;
  }

}
