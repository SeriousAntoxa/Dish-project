export class Dish {

  private _id: string;
  public get id(): string {
    return this._id
  }

  private _name: string;
  public get name(): string {
    return this._name
  }

  private _diet: string;
  public get diet(): string {
    return this._diet
  }

    private _health: string;
  public get health(): string {
    return this._health
  }

    private _cuisineType: string;
  public get cuisineType(): string {
    return this._cuisineType
  }

  private _random: boolean;
  public get random(): boolean {
    return this._random
  }

  private _type: string;
  public get type(): string {
    return this._type
  }

  private _image: string;
  public get image(): string {
    return this._image
  }

  private _mealType: string;
  public get mealType(): string {
    return this._mealType
  }

  private _calories: number;
  public get calories(): number {
    return Number(this._calories.toFixed(0))
  }

  private _ingredients: string[];
  public get ingredients(): string[] {
    return this._ingredients
  }

  constructor(
    id: string,
    name: string,
    type: string,
    image: string,
    mealType: string,
    calories: number,
    ingredients: any,
    diet: string,
    health: string,
    cuisineType: string,
    random: boolean
  ) {
    this._id = id
    this._name = name
    this._type = type
    this._image = image
    this._mealType = mealType
    this._calories = calories
    this._ingredients = ingredients
    this._diet = diet
    this._health = health
    this._cuisineType = cuisineType
    this._random = random
  }

  public static fromJSON(json: any): Dish {
    return new Dish(
      json.recipe.image.toString().slice(-13, -5),
      json.recipe.label,
      json.recipe.dishType,
      json.recipe.image,
      json.recipe.mealType,
      json.recipe.calories,
      json.recipe.ingredients,
      json.recipe.dietLabels,
      json.recipe.healthLabels,
      json.recipe.cuisineType,
      json.recipe.random,
    )
  }
  public static fromDB(dishItemFromDB: any): Dish {
    return new Dish(
      dishItemFromDB._id,
      dishItemFromDB._name,
      dishItemFromDB._type,
      dishItemFromDB._image,
      dishItemFromDB._mealType,
      dishItemFromDB._calories,
      dishItemFromDB._ingredients,
      dishItemFromDB._diet,
      dishItemFromDB._health,
      dishItemFromDB._cuisineType,
      dishItemFromDB._random
    )
  }

}