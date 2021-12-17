import { Component, Input, OnInit } from '@angular/core';
import { DishListService } from '../../services/dish-list/dish-list.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredients!: any

  constructor(
  ) { }  
  
  ngOnInit(): void {

  }

}
