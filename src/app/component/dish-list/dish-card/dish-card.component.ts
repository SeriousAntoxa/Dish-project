import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { FavoritesDataService } from '../../services/favorites-data/favorites-data.service';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { Dish } from '../models/dishModel';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent implements OnInit {

  @Input() dish!: Dish
  @Output() dishSelected = new EventEmitter<any>();

  public faHeart = faHeart;
  public selectDishFavorite: boolean = false
  public authUser!: boolean

  constructor(
    private _authorizationService: AuthorizationService,
    private _favoritesDataService: FavoritesDataService,
    private _favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    if (this._authorizationService.authUserLocal === true) {
      this.authUser = true
      this.validSelectDish()
    } else {
      this.authUser = false
    }
  }

  public validSelectDish() {
   if (this._favoritesService.ifFavoritesInUser === true && this._favoritesService.favoritesDishListName.length !== 0) {
      this.selectDishFavorite = this._favoritesService.favoritesDishListName.includes(this.dish.id)
    }
  }

  public selectItemDish(): void {
    this.dishSelected.emit(this.dish)
  }

  public favoriteSelect(): void {
    if (this.authUser === true) {
      if (this.selectDishFavorite === false) {
        this._favoritesDataService.putFavorites(this.dish).subscribe()
        this.selectDishFavorite = !this.selectDishFavorite
      } else {
        this._favoritesDataService.removeFavorites(this.dish.id).subscribe()
        this.selectDishFavorite = !this.selectDishFavorite
      }
    }
    else {
      console.log("you don't add dish in favorite. Log in or sing up, please")
    }
  }
}
