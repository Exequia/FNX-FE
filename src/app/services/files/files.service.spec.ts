import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FilesService } from './files.service';

describe('FilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FilesService]
    });
  });

  it('should be created', inject([FilesService], (service: FilesService) => {
    expect(service).toBeTruthy();
  }));
});
