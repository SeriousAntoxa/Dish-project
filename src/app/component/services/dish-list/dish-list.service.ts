import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dish } from '../../dish-list/models/dishModel';

@Injectable({
  providedIn: 'root'
})
export class DishListService {

  public dishList!: Dish[]
  public selectedDish!: Dish

  constructor() { }

  
}
