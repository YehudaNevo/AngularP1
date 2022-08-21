//import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })

export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('sugar', 8),
    new Ingredient('water', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChange.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  constructor() {}
}
