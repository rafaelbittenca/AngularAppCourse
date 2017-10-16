import { TestBed, inject } from '@angular/core/testing';

import { AuthGuarde } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuarde]
    });
  });

  it('should be created', inject([AuthGuarde], (service: AuthGuarde) => {
    expect(service).toBeTruthy();
  }));
});
