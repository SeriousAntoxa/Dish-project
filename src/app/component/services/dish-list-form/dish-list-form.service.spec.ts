import { TestBed } from '@angular/core/testing';

import { DishListFormService } from './dish-list-form.service';

describe('DishListFormService', () => {
  let service: DishListFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishListFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
