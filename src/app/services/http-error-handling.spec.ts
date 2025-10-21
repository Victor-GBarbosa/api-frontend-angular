import { TestBed } from '@angular/core/testing';

import { HttpErrorHandling } from './http-error-handling';

describe('HttpErrorHandling', () => {
  let service: HttpErrorHandling;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorHandling);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
