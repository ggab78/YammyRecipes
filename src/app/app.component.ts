import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isRecipes = true;
  isShoppingList = false;

  onReceiveRecipes(isRecipes: boolean) {
    this.isRecipes = isRecipes;
  }

  onReceiveShoppingList(isShoppingList: boolean) {
    this.isShoppingList = isShoppingList;
  }
}
