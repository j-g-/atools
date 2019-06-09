import { TestBed } from '@angular/core/testing';

import { AgentInfoService } from './agent-info.service';

describe('AgentInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentInfoService = TestBed.get(AgentInfoService);
    expect(service).toBeTruthy();
  });
});
