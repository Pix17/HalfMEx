import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHero } from '../mod/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!:IHero;
  @Output() show = new EventEmitter<IHero>();

  

  constructor() { }

  ngOnInit(): void {
  }

}
