import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProduct } from './register-product';

describe('RegisterProduct', () => {
  let component: RegisterProduct;
  let fixture: ComponentFixture<RegisterProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
