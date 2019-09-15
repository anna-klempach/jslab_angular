import { Component, OnInit } from '@angular/core';
import ICard from '../models/ICard';
import IUser from '../models/IUser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit, ICard {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: IUser;

  constructor() { }

  ngOnInit() {
  }

}
