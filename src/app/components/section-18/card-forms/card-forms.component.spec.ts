import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormsComponent } from './card-forms.component';

describe('CardFormsComponent', () => {
  let component: CardFormsComponent;
  let fixture: ComponentFixture<CardFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
