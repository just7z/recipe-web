import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Steak and Eggs',
  //     'Medium-rare steak with sunny side up eggs!',
  //     'https://hips.hearstapps.com/hmg-prod/images/steak-and-eggs-pin-1580248319.jpg',
  //     [
  //       new Ingredient('Beef Steak', 2),
  //       new Ingredient('Egg', 4),
  //     ]),
  //   new Recipe(
  //     'Fried Chicken and Waffle',
  //     'Golden Crispy Juicy Fried Chicken and waffle!',
  //     'https://www.wellseasonedstudio.com/wp-content/uploads/2019/03/Chicken-and-waffles-18.jpg',
  //     [
  //       new Ingredient('Chicken Breast', 2),
  //       new Ingredient('Waffle', 4),
  //     ]),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
