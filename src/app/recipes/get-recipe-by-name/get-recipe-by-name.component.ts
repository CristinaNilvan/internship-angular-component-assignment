import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RECIPES } from '../mock-recipes';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-get-recipe-by-name',
  templateUrl: './get-recipe-by-name.component.html',
  styleUrls: ['./get-recipe-by-name.component.css'],
})
export class GetRecipeByNameComponent implements OnInit {
  recipes = RECIPES;

  @ViewChild('recipeName')
  recipeName!: ElementRef;
  foundRecipe?: Recipe;

  constructor() {}

  ngOnInit(): void {}

  findRecipeByName() {
    const recipeNameValue = this.recipeName.nativeElement.value;

    this.foundRecipe = this.recipes.find(
      (recipe) => recipe.approved == true && recipe.name == recipeNameValue
    );
  }
}
