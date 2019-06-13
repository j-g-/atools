import { Injectable } from '@angular/core';
import { InteractionNote } from "./interaction-note";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IneractionNotesService {
  currentNote: InteractionNote;
  currentNoteChange: Subject<InteractionNote> = new Subject<InteractionNote>();
  notes: InteractionNote[];
  currentIndex: number;
  constructor() {
    this.loadFromLocalStorage();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  public deleteAllNotes() {
    this.deleteLocalStorage();
    this.resetVariables();
  }
  resetVariables(){
    this.currentNote = new InteractionNote();
    this.notes = [];
    this.notes.push(this.currentNote);
    this.currentIndex = 0;
    this.updateToCurrentIndex();
  }
    
  loadFromLocalStorage(){
    let jsonData = localStorage.getItem("notes");
    console.log(jsonData);
    if (jsonData.length == 0){
      this.resetVariables();
    } else {
      this.notes = JSON.parse(jsonData);
      this.currentIndex = this.notes.length -1;
    }
    this.updateToCurrentIndex();
  }
  newNote(){
    this.notes.push(new InteractionNote());
    this.currentIndex = this.notes.length -1;
    this.saveToLocalStorage();
    this.updateToCurrentIndex();
  }

  getCurrentNote(){
    return this.currentNote;
  }

  nextNote(){
    this.currentIndex++;
    if (this.currentIndex > (this.notes.length-1) ){
      this.currentIndex = this.notes.length-1; 
    }
    this.updateToCurrentIndex();
  }

  previousNote(){
    this.currentIndex--;
    if (this.currentIndex < 0 ){
      this.currentIndex = 0; 
    }
    this.updateToCurrentIndex();
  }

  updateToCurrentIndex(){
    this.currentNote = this.notes[this.currentIndex];
    this.currentNoteChange.next(this.currentNote);
  }

  saveToLocalStorage(){
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }   

  deleteLocalStorage(){
    localStorage.setItem("notes", "");
  }   

}
