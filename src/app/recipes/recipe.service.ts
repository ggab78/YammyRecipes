import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private ingredients: Ingredient[];
  private recipes: Recipe[] = [
    new Recipe(
      'Test 1',
      'to test how it works 1',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('ognion', 2)
      ]),

    new Recipe(
      'Test 2',
      'to test how it works 2',
      // tslint:disable-next-line:max-line-length
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fmrtrending0475.jpg%3Fitok%3D-tA_cB-C%261521838046&w=1200&c=sc&poi=face&q=85',
      [
        new Ingredient('tomato', 2),
        new Ingredient('potato', 3)
      ])
  ];
  selectedRecipeEmitter = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
