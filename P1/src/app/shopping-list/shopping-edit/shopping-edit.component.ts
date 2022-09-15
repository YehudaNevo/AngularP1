import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) {}
  editMode: boolean = false;
  editItemIdx: number;
  editItem: Ingredient;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.shoppingListService.stratEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIdx = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const ing = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIdx, ing);
    } else {
      this.shoppingListService.addIngredient(ing);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteItem(this.editItemIdx);
    this.onClear();
  }
}
