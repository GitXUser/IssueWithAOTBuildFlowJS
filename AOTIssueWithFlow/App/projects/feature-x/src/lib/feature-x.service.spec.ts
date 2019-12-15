import { TestBed } from '@angular/core/testing';

import { FeatureXService } from './feature-x.service';

describe('FeatureXService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureXService = TestBed.get(FeatureXService);
    expect(service).toBeTruthy();
  });
});
