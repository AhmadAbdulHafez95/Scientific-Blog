import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any> = [
    {cat: "Programming", num: 5},
    {cat: "Medicine", num: 1},
    {cat: "Engineering", num: 1},
    {cat: "Artificial Intelligence", num: 2},
    {cat: "Business Management", num: 2},
    {cat: "Data analysis", num: 2},
    {cat: "Project Management", num: 1},
    {cat: "Design", num: 1}
   ];
   
  constructor() { }

  ngOnInit(): void {
  }
}
