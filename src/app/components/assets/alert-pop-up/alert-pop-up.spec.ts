import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPopUp } from './alert-pop-up';

describe('AlertPopUp', () => {
  let component: AlertPopUp;
  let fixture: ComponentFixture<AlertPopUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertPopUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertPopUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
