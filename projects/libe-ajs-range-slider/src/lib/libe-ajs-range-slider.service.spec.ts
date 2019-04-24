import { TestBed } from '@angular/core/testing';

import { LibeAjsRangeSliderService } from './libe-ajs-range-slider.service';

describe('LibeAjsRangeSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibeAjsRangeSliderService = TestBed.get(LibeAjsRangeSliderService);
    expect(service).toBeTruthy();
  });
});
