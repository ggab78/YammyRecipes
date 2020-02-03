import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test 1', 'to test how it works 1', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Test 2', 'to test how it works 2', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fmrtrending0475.jpg%3Fitok%3D-tA_cB-C%261521838046&w=1200&c=sc&poi=face&q=85')
  ];
  selectedRecipeEmitter = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

}
