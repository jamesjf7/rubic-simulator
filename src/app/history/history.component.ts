import { Component, OnInit, Input } from '@angular/core';
import { History } from 'src/types/data-types';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass'],
})
export class HistoryComponent implements OnInit {
  @Input() histories: History[] = [];
  constructor() {}

  ngOnInit(): void {}
}
