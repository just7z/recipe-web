import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Steak and Eggs',
      'Medium-rare steak with sunny side up eggs!',
      'https://hips.hearstapps.com/hmg-prod/images/steak-and-eggs-pin-1580248319.jpg',
      [
        new Ingredient('Beef Steak', 2),
        new Ingredient('Egg', 4),
      ]),
    new Recipe(
      'Fried Chicken and Waffle',
      'Golden Crispy Juicy Fried Chicken and waffle!',
      'https://www.wellseasonedstudio.com/wp-content/uploads/2019/03/Chicken-and-waffles-18.jpg',
      [
        new Ingredient('Chicken Breast', 2),
        new Ingredient('Waffle', 4),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
