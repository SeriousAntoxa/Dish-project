import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Dish } from '../../dish-list/models/dishModel';
import { DishListFormService } from '../dish-list-form/dish-list-form.service';
import { DishListService } from '../dish-list/dish-list.service';

@Injectable({
  providedIn: 'root'
})
export class DishListDataService {

  public ingredientsReq: string = this.dishListFormService.selectIngredients
  public dietReq!: string
  public healthReq: string = this.dishListFormService.selectHealth
  public cuisineTypeReq: string = this.dishListFormService.selectCuisineType
  public randomReq: string = this.dishListFormService.selectRandom
  public mealTypeReq: string = this.dishListFormService.selectMealType
  public dishTypeReq: string = this.dishListFormService.selectDiet

  private _app_id: string = "026f258f";
  private _app_key: string = "8851b7263001e391bd4e969c211bdf8c";

  constructor(
    public dishListFormService: DishListFormService,
    public dishListService: DishListService,
    private _httpClient: HttpClient
  ) {
  }

  public loadDishList(): Observable<Dish[]> {
    let reqParams = []

    this.ingredientsReq = this.dishListFormService.selectIngredients
    this.dietReq = this.dishListFormService.selectDiet
    this.healthReq = this.dishListFormService.selectHealth
    this.cuisineTypeReq = this.dishListFormService.selectCuisineType
    this.randomReq = this.dishListFormService.selectRandom
    this.mealTypeReq = this.dishListFormService.selectMealType
    this.dishTypeReq = this.dishListFormService.selectDishType
  
    if (this.ingredientsReq !== '' && this.ingredientsReq !== undefined) {
      reqParams.push(this.ingredientsReq)
      this.ingredientsReq = "&q=" + this.ingredientsReq.split(', ').join('%2C%20')
    } else {
      this.ingredientsReq = "&q=" + ''
    }

    if (this.dietReq !== '' && this.dietReq !== undefined) {   
      reqParams.push(this.dietReq)   
      this.dietReq = "&diet=" + this.dietReq
    } else {
      this.dietReq = ''
    }

    if (this.healthReq !== '' && this.healthReq !== undefined) {  
      reqParams.push(this.healthReq)    
      this.healthReq = "&health=" + this.healthReq
    } else {
      this.healthReq = ''
    }

    if (this.cuisineTypeReq !== '' && this.cuisineTypeReq !== undefined) {      
      reqParams.push(this.cuisineTypeReq)
      this.cuisineTypeReq = "&cuisineType=" + this.cuisineTypeReq.split(' ').join('%20')
    } else {
      this.cuisineTypeReq = ''
    }

    if (this.mealTypeReq !== '' && this.mealTypeReq !== undefined) {     
      reqParams.push(this.mealTypeReq) 
      this.mealTypeReq = "&mealType=" + this.mealTypeReq
    } else {
      this.mealTypeReq = ''
    }

    if (this.dishTypeReq !== '' && this.dishTypeReq !== undefined) {     
      reqParams.push(this.dishTypeReq) 
      this.dishTypeReq = "&dishType=" + this.dishTypeReq.split(' ').join('%20')
    } else {
      this.dishTypeReq = ''
    }

    this.dishListFormService.selectParams = reqParams

    let requestURL: string = `https://api.edamam.com/api/recipes/v2?type=public${this.ingredientsReq}&app_id=${this._app_id}&app_key=${this._app_key}&random=${this.randomReq}${this.dietReq}${this.healthReq}${this.dishTypeReq}${this.cuisineTypeReq}${this.mealTypeReq}`;
    console.log(requestURL);
    
    return this._httpClient.get<any>(`${requestURL}`)
      .pipe(
        map((dishListData: any) => {
          console.log(dishListData);
          
          return dishListData.hits.map((dishJSON: any) => Dish.fromJSON(dishJSON))
        }),
        catchError((err) => {
          console.log(err)
          throw 'error in source. Details: ' + err;
        })
      )
  }

  loadOurDishList(): void {
    
    let loadDish = this.loadDishList()
      .subscribe((dishList: Dish[]) => {
        this.dishListService.dishList = dishList
        if (this.dishListService.dishList === dishList) {
          loadDish.unsubscribe()
        }
      })
  }
}
