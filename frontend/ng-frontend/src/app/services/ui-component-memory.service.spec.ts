import { TestBed } from '@angular/core/testing';

import { UiComponentMemoryService } from './ui-component-memory.service';

describe('UiComponentMemoryService', () => {
  let service: UiComponentMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiComponentMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
