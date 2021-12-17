import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishListFormService {

  public selectIngredients: string = ''
  public selectDiet: string = ''
  public selectHealth: string = ''
  public selectCuisineType: string = ''
  public selectRandom: string = ''
  public selectMealType: string = ''
  public selectDishType: string = ''

  public selectParams: string[] = []
  
  constructor() { }

  public cuisineTypeArray = ['American','Asian','British','Caribbean','Central Europe','Chinese','Eastern Europe','French','Indian','Italian','Japanese','Kosher','Mediterranean','Mexican','Middle Eastern','Nordic','South American','South East Asian']
  public dishTypeArray = ['Alcohol-cocktail','Biscuits and cookies','Bread','Cereals','Condiments and sauces','Drinks','Desserts','Egg','Main course','Omelet','Pancake','Preps','Preserve','Salad','Sandwiches','Soup','Starter']
  public mealTypeArray = ['Breakfast','Dinner','Lunch','Snack','Teatime']
  public healthArray = ['alcohol-cocktail','alcohol-free','celery-free','crustacean-free','dairy-free','DASH','egg-free','fish-free','fodmap-free','gluten-free','immuno-supportive','keto-friendly','kidney-friendly','kosher','low-potassium','low-sugar','lupine-free','Mediterranean','mollusk-free','mustard-free','No-oil-added','paleo','peanut-free','pecatarian','pork-free','red-meat-free','sesame-free','shellfish-free','soy-free','sugar-conscious','sulfite-free','tree-nut-free','vegan','vegetarian','wheat-free']
  public dietArray = ['balanced','high-fiber','high-protein','low-carb','low-fat','low-sodium']
  public randomArray = [true,false]
}
