import { Component, OnInit } from '@angular/core';
import { AgentInfo } from '../agent-info';
import { AgentInfoService } from '../agent-info.service';

@Component({
  selector: 'app-agent-info-editor',
  templateUrl: './agent-info-editor.component.html',
  styleUrls: ['./agent-info-editor.component.css']
})
export class AgentInfoEditorComponent implements OnInit {
  agentInfo:AgentInfo;
  constructor(private agentInfoService:AgentInfoService) { }

  ngOnInit() {
    this.agentInfo = this.agentInfoService.getCurrent();
    console.log(this.agentInfo.name);
  }
  save(){
    this.agentInfoService.saveToLocalStorage();

  }

}
