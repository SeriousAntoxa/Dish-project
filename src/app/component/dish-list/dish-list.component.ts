import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization/authorization.service';
import { DishListDataService } from '../services/dish-list-data/dish-list-data.service';
import { DishListFormService } from '../services/dish-list-form/dish-list-form.service';
import { DishListService } from '../services/dish-list/dish-list.service';
import { FavoritesDataService } from '../services/favorites-data/favorites-data.service';
import { Dish } from './models/dishModel';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  public dishList: Dish[] = []
  public selectIngredients: string = ''
  public dishSelected: Dish | null = null

  constructor(
    public dishListDataService: DishListDataService,
    public favoritesDataService: FavoritesDataService,
    public dishListService: DishListService,
    public dishListFormService: DishListFormService,
    private _authorizationService: AuthorizationService,
    private _router: Router
  ) {
    this.dishListDataService.loadDishList().subscribe(item => this.dishList = item)
  }

  ngOnInit(): void {
    this.loadDish()
     if (this._authorizationService.authUserLocal === true) {
      this.favoritesDataService.loadFavoritesDishList()
    }
  }

  selectedDish(dish: Dish) {
    this.dishListService.selectedDish = dish
    this._router.navigate(['/dish-list', String(this.dishListService.selectedDish.id)])
  }

  loadDish() {
    this.selectIngredients = this.dishListFormService.selectIngredients
  }

}
