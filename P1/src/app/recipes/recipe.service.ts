import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'test1',
      'test1 recipe ',
      'https://image.shutterstock.com/image-photo/pumpkin-soup-food-photography-recipe-260nw-1117916249.jpg',
      [new Ingredient('sugar', 8), new Ingredient('wine', 2)]
    ),
    new Recipe(
      'test2',
      'test2 recipe ',
      'https://image.shutterstock.com/image-photo/pumpkin-soup-food-photography-recipe-260nw-1117916249.jpg',
      []
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //  like Dto ?
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
