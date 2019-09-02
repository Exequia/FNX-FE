import { TestBed, inject } from '@angular/core/testing';

import { StudiesServiceService } from './studies-service.service';

describe('StudiesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudiesServiceService]
    });
  });

  it('should be created', inject([StudiesServiceService], (service: StudiesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
