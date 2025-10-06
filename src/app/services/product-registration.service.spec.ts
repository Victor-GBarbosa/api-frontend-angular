import { TestBed } from '@angular/core/testing';

import { ProductRegistration } from './product-registration.service';

describe('ProductRegistration', () => {
  let service: ProductRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRegistration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
