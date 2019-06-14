import { Component } from '@angular/core';
import { IneractionNotesService } from './interaction-notes/ineraction-notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agent Tools';
  noteIndex: number;
  constructor(private interactionNotesService:IneractionNotesService){
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
}
