import { TestBed, inject } from '@angular/core/testing';

import { GithubColumnService } from './github-column.service';

describe('GithubColumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubColumnService]
    });
  });

  it('should be created', inject([GithubColumnService], (service: GithubColumnService) => {
    expect(service).toBeTruthy();
  }));
});
