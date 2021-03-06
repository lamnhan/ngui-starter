import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-splashscreens-page',
  templateUrl: './splashscreens.component.html',
  styleUrls: ['./splashscreens.component.scss']
})
export class SplashscreensComponent implements OnInit {

  constructor(public readonly data: DataService) { }

  ngOnInit(): void {
  }

}
