import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.scss'],
})
export class MovieListCardComponent implements OnInit {

  hasHeader: boolean = false;
  hasFooter: boolean = false;

  constructor() { }

  ngOnInit() {}

}
