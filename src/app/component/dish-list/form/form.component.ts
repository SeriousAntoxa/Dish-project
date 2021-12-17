import { EventEmitter, Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DishListDataService } from '../../services/dish-list-data/dish-list-data.service';
import { DishListFormService } from '../../services/dish-list-form/dish-list-form.service';
import { DishListService } from '../../services/dish-list/dish-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormComponent implements OnInit {

  @Output() selectIng: EventEmitter<any> = new EventEmitter()

  public cuisineType!: string
  public dishType!: string
  public mealType!: string
  public health!: string
  public diet!: string
  public random: string = 'false'
  public ingredients: string = this.dishListFormService.selectIngredients

  constructor(
    public dishListService: DishListService,
    public dishListFormService: DishListFormService,
    public dishListDataService: DishListDataService,
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.dishListFormService.selectCuisineType = this.cuisineType
    this.dishListFormService.selectDishType = this.dishType
    this.dishListFormService.selectMealType = this.mealType
    this.dishListFormService.selectHealth = this.health
    this.dishListFormService.selectDiet = this.diet
    this.dishListFormService.selectRandom = this.random
    this.dishListFormService.selectIngredients = this.ingredients 
    
    this.dishListDataService.loadOurDishList()

    this.selectIng.emit()
  }
}
