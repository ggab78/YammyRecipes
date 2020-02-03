import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName', {static: true}) ingName: ElementRef;
  @ViewChild('ingAmount', {static: true}) ingAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    this.shoppingListService.addIngredient({name: this.ingName.nativeElement.value, amount: this.ingAmount.nativeElement.value});
  }
}
