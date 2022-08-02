import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit() {}
}
