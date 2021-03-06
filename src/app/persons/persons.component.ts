import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  constructor() {}

  @Input() personList?: string[];

  ngOnInit(): void {}
}
