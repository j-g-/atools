import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackEditorComponent } from './callback-editor.component';

describe('CallbackEditorComponent', () => {
  let component: CallbackEditorComponent;
  let fixture: ComponentFixture<CallbackEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
