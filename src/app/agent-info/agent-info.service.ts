import { Injectable } from '@angular/core';
import { AgentInfo } from './agent-info';

@Injectable({
  providedIn: 'root'
})
export class AgentInfoService {
  currentAgentInfo: AgentInfo;

  constructor() {
    this.getFromLocalStorage();
  }
  getFromLocalStorage(){
    this.currentAgentInfo =  JSON.parse(localStorage.getItem("agentInfo"));
    if (this.currentAgentInfo == null){
      this.currentAgentInfo = new AgentInfo();
    }
  }
  getCurrent(){
    return this.currentAgentInfo;
  }
  saveToLocalStorage(){
    localStorage.setItem("agentInfo", JSON.stringify(this.currentAgentInfo));
    
  }   
}
