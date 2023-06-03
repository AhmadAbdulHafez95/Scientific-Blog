import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Array<string> =[
    "#Programming",
    "#Medicine",
    "#Engineering",
    "#Artificial",
    "#Business",
    "#Data",
    "#Project",
    "#Design",
    "#Management",
    "#analysis"
   ];
  constructor() { }

  ngOnInit(): void {
  }


}
