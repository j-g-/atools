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
    this.note = this.notesService.currentNote;
  }
  copySummaryToClipboard(){
    var r = document.createRange();
    var summary = document.getElementById("summary-text");
    r.selectNode(summary)
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(r); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
  }
}
