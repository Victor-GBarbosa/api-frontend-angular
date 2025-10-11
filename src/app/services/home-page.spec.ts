import { TestBed } from '@angular/core/testing';

import { HomePage } from './home-page';

describe('HomePage', () => {
  let service: HomePage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
