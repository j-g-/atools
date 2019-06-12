import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbacksBoardComponent } from './callbacks-board.component';

describe('CallbacksBoardComponent', () => {
  let component: CallbacksBoardComponent;
  let fixture: ComponentFixture<CallbacksBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbacksBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbacksBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
