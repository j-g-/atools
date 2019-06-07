import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEditorComponent } from './sale-editor.component';

describe('SaleEditorComponent', () => {
  let component: SaleEditorComponent;
  let fixture: ComponentFixture<SaleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
