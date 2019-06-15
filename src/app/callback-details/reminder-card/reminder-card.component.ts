import { Component,Input, OnInit } from '@angular/core';
import { InteractionNote } from 'src/app/interaction-notes/interaction-note';

@Component({
  selector: 'app-reminder-card',
  templateUrl: './reminder-card.component.html',
  styleUrls: ['./reminder-card.component.css']
})
export class ReminderCardComponent implements OnInit {
  @Input() note:InteractionNote;
  constructor() { }

  ngOnInit() {
  }
  getSeverity(){
    console.log( "severity-"+this.note.callbackInfo.severity);
    return "severity-"+this.note.callbackInfo.severity;
  }

}
