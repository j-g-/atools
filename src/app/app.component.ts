import { Component } from '@angular/core';
import { IneractionNotesService } from './interaction-notes/ineraction-notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agent Tools';
  constructor(private interactionNotesService:IneractionNotesService){

  }
  saveNotes(){
    console.log("save front")
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
}
