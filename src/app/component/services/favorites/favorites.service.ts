import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dish } from '../../dish-list/models/dishModel';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  public favoritesDishList: Subject<Dish[]> = new Subject()
  public favoritesDishListName: string[] = []
  public ifFavoritesInUser: boolean = false

  constructor() { }
}
