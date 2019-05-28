import { Component, OnInit } from '@angular/core';
import { InteractionNote } from "../interaction-note";
import { IneractionNotesService } from "../ineraction-notes.service";

@Component({
  selector: 'app-note-summary',
  templateUrl: './note-summary.component.html',
  styleUrls: ['./note-summary.component.css']
})
export class NoteSummaryComponent implements OnInit {
  note: InteractionNote;
  dateText: string;

  constructor(private notesService: IneractionNotesService) { 
    // this.note.accPhoneNumber = "0123456789"
    // this.note.callbackPhoneNumber = "0123456789"
    // this.note.accRef = "0123456789"
    //this.dateText = this.note.date.toDateString()
  }

  ngOnInit() {
    //console.log(this.note.date.toDateString());
    this.note = this.notesService.currentNote;
  }


}
