import {
  NgModule,
  OnInit } from '@angular/core';
import {
  RouterModule,
  Routes
} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeDeleteComponent} from "./recipes/recipe-delete/recipe-delete.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes' , pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
      { path: ':id/delete', component: RecipeDeleteComponent },
    ] },
  { path: 'shopping-list', component: ShoppingListComponent, children: [
      { path: ':id/edit', component: ShoppingEditComponent },
    ] },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
}