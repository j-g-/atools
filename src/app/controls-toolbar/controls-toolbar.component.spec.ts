import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsToolbarComponent } from './controls-toolbar.component';

describe('ControlsToolbarComponent', () => {
  let component: ControlsToolbarComponent;
  let fixture: ComponentFixture<ControlsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
