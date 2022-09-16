import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-get-recipe-by-name',
  templateUrl: './get-recipe-by-name.component.html',
  styleUrls: ['./get-recipe-by-name.component.css'],
})
export class GetRecipeByNameComponent implements OnInit {
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Rec1',
      author: 'Auth1',
      description: 'Desc1',
      calories: 500,
      approved: true,
    },
    {
      id: 2,
      name: 'Rec2',
      author: 'Auth2',
      description: 'Desc2',
      calories: 600,
      approved: true,
    },
    {
      id: 3,
      name: 'Rec3',
      author: 'Auth3',
      description: 'Desc3',
      calories: 550,
      approved: true,
    },
    {
      id: 4,
      name: 'Rec4',
      author: 'Auth4',
      description: 'Desc4',
      calories: 360,
      approved: false,
    },
    {
      id: 5,
      name: 'Rec5',
      author: 'Auth5',
      description: 'Desc5',
      calories: 800,
      approved: false,
    },
  ];

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
