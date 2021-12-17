import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DishListDataService } from '../../services/dish-list-data/dish-list-data.service';
import { DishListService } from '../../services/dish-list/dish-list.service';
import { FavoritesDataService } from '../../services/favorites-data/favorites-data.service';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { Dish } from '../models/dishModel';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit, OnDestroy {

  public selectDish!: Dish | undefined
  public dish!: Dish 
  public dishDateInterval!: any
  public notFound: string = ''
  public faHeart = faHeart;
  public selectDishFavorite: boolean = false

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _favoritesDataService: FavoritesDataService,
    private _favoritesService: FavoritesService,
    public dishListService: DishListService,
    public dishListDataService: DishListDataService
  ) {

  }

  ngOnInit(): void {
    let countReq: number = 0

    this.dishListDataService.loadOurDishList()

    this.dishDateInterval = setInterval(() => {

      if (Boolean(this.dishListService.dishList)) {
        this._activatedRoute.params
          .subscribe((params: any) => {
            const currentDishId: string | null = Boolean(params) ? params.id : null
            this.selectDish = this.dishListService.dishList.find((dishItem) => dishItem.id === currentDishId)
            
            if (this.selectDish === undefined) {
              this._router.navigate(['/pageNotFound'])
            } else {
              this.dish = this.selectDish
              this.validSelectDish()
            }

          })

        clearInterval(this.dishDateInterval)
      }

      countReq++

      if (countReq === 20) {
        clearInterval(this.dishDateInterval)
      }

    }, 500)
  }

  ngOnDestroy(): void {
    clearInterval(this.dishDateInterval)
  }

  public validSelectDish() {
    if (this._favoritesService.ifFavoritesInUser === true && this._favoritesService.favoritesDishListName.length !== 0) {
      this.selectDishFavorite = this._favoritesService.favoritesDishListName.includes(this.dish.id)
     }
   }

  public favoriteSelect(): void {
    if (this.selectDishFavorite === false) {
      this._favoritesDataService.putFavorites(this.dish).subscribe()
      this.selectDishFavorite = !this.selectDishFavorite
    } else {
      this._favoritesDataService.removeFavorites(this.dish.id).subscribe()
      this.selectDishFavorite = !this.selectDishFavorite
    }
  }
}
