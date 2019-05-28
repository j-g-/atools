import { TestBed } from '@angular/core/testing';

import { IneractionNotesService } from './ineraction-notes.service';

describe('IneractionNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IneractionNotesService = TestBed.get(IneractionNotesService);
    expect(service).toBeTruthy();
  });
});
