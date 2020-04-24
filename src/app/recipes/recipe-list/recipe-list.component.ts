import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Just a test','https://p1.pxfuel.com/preview/790/544/941/recipes-burgers-vegetables-burger.jpg'),
    new Recipe('A Test Recipe','Just a test','https://p1.pxfuel.com/preview/790/544/941/recipes-burgers-vegetables-burger.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
