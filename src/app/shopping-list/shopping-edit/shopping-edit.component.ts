import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientEmitter = new EventEmitter<{ name: string, amount: number }>();
  @ViewChild('ingName', {static: true}) ingName: ElementRef;
  @ViewChild('ingAmount', {static: true}) ingAmount: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredientEmitter.emit({name: this.ingName.nativeElement.value, amount: this.ingAmount.nativeElement.value});
  }
}
