import { Component } from '@angular/core';
import { IneractionNotesService } from './interaction-notes/ineraction-notes.service';
import { AgentInfoService } from './agent-info/agent-info.service';
import { AgentInfo } from './agent-info/agent-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agent Tools';
}
