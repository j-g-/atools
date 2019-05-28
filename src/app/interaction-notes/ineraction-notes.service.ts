import { Injectable } from '@angular/core';
import { InteractionNote } from "./interaction-note";

@Injectable({
  providedIn: 'root'
})
export class IneractionNotesService {
  currentNote: InteractionNote;
  constructor() {
    this.currentNote = new InteractionNote();
  }
}
