import { TestBed } from '@angular/core/testing';

import { FavoritesDataService } from './favorites-data.service';

describe('FavoritesDataService', () => {
  let service: FavoritesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
