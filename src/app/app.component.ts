import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-component';
  recipesApprovedStatus: boolean = true;
  numberOfRecipesByApprovedStatus!: number;
  showNumberOfRecipes: boolean = false;

  setApprovedStatusToTrue() {
    this.recipesApprovedStatus = true;
  }

  setApprovedStatusToFalse() {
    this.recipesApprovedStatus = false;
  }

  getRecipesByApprovedStatusCountHandler(event: any) {
    this.numberOfRecipesByApprovedStatus = event;
  }

  toggleNumberOfRecipes() {
    this.showNumberOfRecipes = !this.showNumberOfRecipes;
  }
}
