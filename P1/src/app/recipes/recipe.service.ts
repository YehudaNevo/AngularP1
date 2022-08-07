import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'test1',
      'test1 recipe ',
      'https://image.shutterstock.com/image-photo/pumpkin-soup-food-photography-recipe-260nw-1117916249.jpg'
    ),
    new Recipe(
      'test2',
      'test2 recipe ',
      'https://image.shutterstock.com/image-photo/pumpkin-soup-food-photography-recipe-260nw-1117916249.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //  like Dto ?
  }
}
