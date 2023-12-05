import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  elements: string[] = [];
  inputText = '';

  constructor() {
    this.inputText = '';
    this.elements = [];
  }
  ngOnInit(): void {  }
  inputToArr(): void {
    this.elements.push(this.inputText);
    this.inputText = '';
  }
  removeElement(i: number): void {
    this.elements.splice(i, 1);
  }
}
