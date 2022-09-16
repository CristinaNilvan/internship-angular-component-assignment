import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipesComponent } from './recipes/list-recipes/list-recipes.component';
import { GetRecipeByNameComponent } from './recipes/get-recipe-by-name/get-recipe-by-name.component';
import { CustomPipePipe } from './custom-pipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    GetRecipeByNameComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
