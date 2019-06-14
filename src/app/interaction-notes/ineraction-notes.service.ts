import { Injectable } from '@angular/core';
import { InteractionNote } from "./interaction-note";
import { Subject } from 'rxjs';
import { CallbackInfo } from '../callback-details/callback-info';

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
  public deleteCurrentNote(){
    if(this.currentIndex > -1){
      this.notes.splice(this.currentIndex,1);
    }
    if (this.notes.length == 0){
      this.resetVariables();
    }
    if(this.currentIndex > 0){
      this.currentIndex--;
    } 
    this.saveToLocalStorage();
    this.updateToCurrentIndex();
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
      this.notes = [];
      let rawNotes = JSON.parse(jsonData);
      rawNotes.forEach((n: InteractionNote) => {
        let ncont = new InteractionNote();
        ncont.fromJSON(n);
        ncont.callbackInfo = Object.assign(new CallbackInfo(ncont.id), ncont.callbackInfo);
        this.notes.push(ncont);
      });
      this.currentIndex = this.notes.length -1;
    }
    this.updateToCurrentIndex();
  }
  newNote(){
    let n = new InteractionNote();
    console.log("Test new");
    console.log(n.getFollowUpInfo().isToday());
    this.notes.push(n);
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
