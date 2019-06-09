import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentInfoEditorComponent } from './agent-info-editor.component';

describe('AgentInfoEditorComponent', () => {
  let component: AgentInfoEditorComponent;
  let fixture: ComponentFixture<AgentInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
