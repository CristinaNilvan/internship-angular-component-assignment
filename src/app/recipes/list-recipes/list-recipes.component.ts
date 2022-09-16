import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RECIPES } from '../mock-recipes';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
})
export class ListRecipesComponent implements OnInit {
  recipes = RECIPES;

  @Input() approvedStatus: boolean = true;
  @Output() numberOfRecipesByApprovedStatus: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  getRecipesByApprovedStatus(): Recipe[] {
    const filteredRecipes = this.recipes.filter(
      (recipe) => recipe.approved == this.approvedStatus
    );

    this.getRecipesByApprovedStatusCount(filteredRecipes);

    return filteredRecipes;
  }

  getRecipesByApprovedStatusCount(filteredRecipes: Recipe[]) {
    const numberOfFiltereRecipes = filteredRecipes.length;
    this.numberOfRecipesByApprovedStatus.emit(numberOfFiltereRecipes);
  }
}
