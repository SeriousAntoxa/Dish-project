import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from '../../dish-list/models/dishModel';
import { DishListService } from '../../services/dish-list/dish-list.service';
import { FavoritesDataService } from '../../services/favorites-data/favorites-data.service';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public validFavorites!: boolean
  public favoritesDishList!: Dish[]

  constructor(
    public favoritesService: FavoritesService,
    public favoritesDataService: FavoritesDataService,
    public dishListService: DishListService,
    private _router: Router
  ) {  }

  ngOnInit(): void {
    this.favoritesDataService.loadFavoritesDishList()
    this.validFavoritesDish()
    this.favoritesService.favoritesDishList.subscribe(dishArr => {
      this.favoritesDishList = dishArr
    })
  }

  public validFavoritesDish() {
    if (this.favoritesService.ifFavoritesInUser === true && this.favoritesService.favoritesDishListName.length !== 0) {
      this.validFavorites = true
      this.favoritesService.favoritesDishList.subscribe(dishArr => {
        this.favoritesDishList = dishArr
      })
    } else {
      this.validFavorites = false
    }
  }

  selectedDish(dish: Dish) {
    this.dishListService.selectedDish = dish
    this._router.navigate(['/dish-list', String(this.dishListService.selectedDish.id)])
  }
}
