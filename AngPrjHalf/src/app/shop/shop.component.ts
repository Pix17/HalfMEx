import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../mod/interfaces';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

@Input() items!:IHero[];
  
constructor() { }

  ngOnInit(): void {
  }

}
