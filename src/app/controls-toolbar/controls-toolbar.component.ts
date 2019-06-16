import { Component, OnInit, Input } from '@angular/core';
import { AgentInfo } from '../agent-info/agent-info';
import { IneractionNotesService } from '../interaction-notes/ineraction-notes.service';
import { AgentInfoService } from '../agent-info/agent-info.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-controls-toolbar',
  templateUrl: './controls-toolbar.component.html',
  styleUrls: ['./controls-toolbar.component.css']
})
export class ControlsToolbarComponent implements OnInit {

  @Input() settingsSidenav: MatSidenav;
  noteIndex: number;
  agent:AgentInfo;
  constructor(private interactionNotesService:IneractionNotesService, private agentInfoService:AgentInfoService ){
    this.agent =  agentInfoService.getCurrent();
  }
  
  getNoteIndex(){ return this.interactionNotesService.currentIndex};
  getNotesCount(){ return this.interactionNotesService.notes.length};
  deleteNotes(){
    this.interactionNotesService.deleteAllNotes();
  }
  deleteCurrentNote(){
    this.interactionNotesService.deleteCurrentNote();
  }
  saveNotes(){
    this.interactionNotesService.saveToLocalStorage();
  }
  nextNote(){
    this.interactionNotesService.nextNote();
  }
  newNote(){
    this.interactionNotesService.newNote();
  }
  previousNote(){
    this.interactionNotesService.previousNote();
  }

  ngOnInit() {
  }

}
