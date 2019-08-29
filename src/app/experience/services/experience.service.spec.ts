import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ExperienceService]
    });
  });

  it('should be created', inject(
    [ExperienceService],
    (service: ExperienceService) => {
      expect(service).toBeTruthy();
    }
  ));
});
