import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nguix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
