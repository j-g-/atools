import { Component, OnInit } from '@angular/core';
import { InteractionNote } from "../interaction-note";
import { IneractionNotesService } from "../ineraction-notes.service";
import { AgentInfoService } from 'src/app/agent-info/agent-info.service';
import { AgentInfo } from 'src/app/agent-info/agent-info';

@Component({
  selector: 'app-note-summary',
  templateUrl: './note-summary.component.html',
  styleUrls: ['./note-summary.component.css']
})
export class NoteSummaryComponent implements OnInit {
  note: InteractionNote;
  agent: AgentInfo;
  dateText: string;

  constructor(private notesService: IneractionNotesService, private agentInfoService:AgentInfoService) { 
    // this.note.accPhoneNumber = "0123456789"
    // this.note.callbackPhoneNumber = "0123456789"
    // this.note.accRef = "0123456789"
    //this.dateText = this.note.date.toDateString()
  }

  ngOnInit() {
    //console.log(this.note.date.toDateString());
    this.note = this.notesService.currentNote;
    this.agent = this.agentInfoService.currentAgentInfo;
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
