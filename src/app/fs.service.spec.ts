import { TestBed } from '@angular/core/testing';

import { FsService } from './fs.service';

describe('FsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FsService = TestBed.get(FsService);
    expect(service).toBeTruthy();
  });
});
