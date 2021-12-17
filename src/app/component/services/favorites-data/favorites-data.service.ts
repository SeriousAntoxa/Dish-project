import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../profile/model/UserModel';
import { Dish } from '../../dish-list/models/dishModel';
import { AuthorizationService } from '../authorization/authorization.service';
import { FavoritesService } from '../favorites/favorites.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesDataService {
  selectDishFavorite() {
    throw new Error('Method not implemented.');
  }

  public favoritesDishList!: Dish[]
  public favoritesDishes: Dish[] = []
  public infoUser!: User

  static UrlUsersDb = "https://dishapp-users-default-rtdb.firebaseio.com/"

  constructor(
    private _httpClient: HttpClient,
    private _authorizationService: AuthorizationService,
    public favoritesService: FavoritesService
  ) {
    this.infoUser = this._authorizationService.infoUserLocal
  }

  putFavorites(dish: Dish): Observable<any> {
    return this._httpClient.post<Dish>(`${AuthorizationService.UrlUsersDb}/users/${this.infoUser.name}/favorites/${dish.id}.json`, dish)
      .pipe(map(res => {
        return res;
      }))
  }

  getFavorites(): Observable<any> {
    return this._httpClient.get<any>(`${AuthorizationService.UrlUsersDb}/users/${this.infoUser.name}/favorites.json`)
      .pipe(
        map((res) => {
          return res
        }))
  }

  //selectFavorites() {
  //  this.getFavorites().subscribe((favoritesDishesForBD) => {
  //    if (favoritesDishesForBD === true) {
  //      this.favoritesService.favoritesDishListName = Object.keys(favoritesDishesForBD)
  //      return Object.keys(favoritesDishesForBD)
  //    } else {
  //      return []
  //    }
  //  })
  //}

  ifFavoritesInUser(): Observable<any> {
    return this._httpClient.get<any>(`${AuthorizationService.UrlUsersDb}/users/${this.infoUser.name}.json`)
      .pipe(
        map((res) => {
          return res
        }))
  }

  removeFavorites(dishId: string): Observable<any> {
    return this._httpClient.delete<void>(`${AuthorizationService.UrlUsersDb}/users/${this.infoUser.name}/favorites/${dishId}.json`)
  }

  loadFavoritesDishList(): void {
    let ifFavoritesDish = this.ifFavoritesInUser().subscribe(i => {
      this.favoritesService.ifFavoritesInUser = (Object.keys(i).includes('favorites'))

      if (this.favoritesService.ifFavoritesInUser === true) {
        
        let loadDish = this.getFavorites()
          .subscribe(favoritesDishesFromBD => {

            if (favoritesDishesFromBD !== undefined && favoritesDishesFromBD !== null) {
              this.favoritesService.favoritesDishListName = Object.keys(favoritesDishesFromBD)
              
              for (let item of Object.keys(favoritesDishesFromBD)) {
                this.favoritesDishes.push(Object.values<Dish>(favoritesDishesFromBD[item])[0])
              }

            }

            if (this.favoritesDishes !== []) {
              this.favoritesService.favoritesDishList.next(this.favoritesDishes.map((dishDB: any) => Dish.fromDB(dishDB)))
            }

            this.favoritesDishes = []
            loadDish.unsubscribe()
          })
      }
      ifFavoritesDish.unsubscribe()
    })
  }
}
