import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() recipesEmitter = new EventEmitter<boolean>();
  @Output() shoppingListEmitter = new EventEmitter<boolean>();
  isRecipes: boolean;
  isShoppingList: boolean;

  onSelectRecipes() {
    this.isRecipes = true;
    this.isShoppingList = false;
    this.recipesEmitter.emit(this.isRecipes);
    this.shoppingListEmitter.emit(this.isShoppingList);
  }

  onSelectShoppingList() {
    this.isRecipes = true;
    this.isShoppingList = true;
    this.recipesEmitter.emit(this.isRecipes);
    this.shoppingListEmitter.emit(this.isShoppingList);
  }

}
