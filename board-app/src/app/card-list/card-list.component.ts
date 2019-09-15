import { Component, OnInit } from '@angular/core';
import ICard from '../models/ICard';
import ICardList from '../models/ICardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit, ICardList {
  id: string;
  name: string;
  cards: ICard[];
  constructor() { }

  ngOnInit() {
  }

}
