import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../mod/interfaces';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})
export class MirrorComponent implements OnInit {

@Input() hero?:IHero;
  
constructor() { }

  ngOnInit(): void {
  }

}
