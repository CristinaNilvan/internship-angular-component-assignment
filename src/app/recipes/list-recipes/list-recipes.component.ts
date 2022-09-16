import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
})
export class ListRecipesComponent implements OnInit {
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
