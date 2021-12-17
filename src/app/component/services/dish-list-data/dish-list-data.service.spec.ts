import { TestBed } from '@angular/core/testing';

import { DishListDataService } from './dish-list-data.service';

describe('DishListDataService', () => {
  let service: DishListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
