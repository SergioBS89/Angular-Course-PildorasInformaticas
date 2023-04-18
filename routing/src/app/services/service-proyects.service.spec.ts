import { TestBed } from '@angular/core/testing';

import { ServiceProyectsService } from './service-proyects.service';

describe('ServiceProyectsService', () => {
  let service: ServiceProyectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProyectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
