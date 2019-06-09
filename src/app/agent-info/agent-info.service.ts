import { Injectable } from '@angular/core';
import { AgentInfo } from './agent-info';

@Injectable({
  providedIn: 'root'
})
export class AgentInfoService {
  currentAgentInfo: AgentInfo;

  constructor() {
    this.currentAgentInfo = new AgentInfo();
  }
  getCurrent(){
    return this.currentAgentInfo;
  }
}
