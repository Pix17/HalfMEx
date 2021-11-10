import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHero } from '../mod/interfaces';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})
export class MirrorComponent implements OnInit {

@Input() hero?:IHero;
@Output() close = new EventEmitter<IHero>();
@Output() add = new EventEmitter<IHero>();

  
constructor() { }

  ngOnInit(): void {
  }

}
