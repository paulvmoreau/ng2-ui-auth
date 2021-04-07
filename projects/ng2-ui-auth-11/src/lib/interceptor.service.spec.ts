import { TestBed, inject } from '@angular/core/testing';

import { JwtInterceptor } from './interceptor.service';

describe('InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtInterceptor]
    });
  });

  it('should be created', inject([JwtInterceptor], (service: JwtInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
