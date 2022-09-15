//import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })

export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  stratEdit = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('sugar', 8),
    new Ingredient('water', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(idx: number) {
    return this.ingredients[idx];
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChange.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newItem: Ingredient) {
    this.ingredients[index] = newItem;
    this.ingredientsChange.next(this.ingredients.slice());
  }
  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  constructor() {}
}
