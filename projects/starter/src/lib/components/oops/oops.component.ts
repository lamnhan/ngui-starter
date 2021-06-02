import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nguix-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.scss']
})
export class OopsComponent implements OnInit {
  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Component image
   */
  @Input() image = '/assets/images/404.png';

  /**
   * Input() Component content. For i18n, `OOPS.CONTENT` = Page not found
   */
  @Input() content = 'Page not found!';

  /**
   * Input() Component action link
   */
  @Input() actionLink = ['/'];

  /**
   * Input() Component action text. For i18n, `OOPS.ACTION_TEXT` = Go home
   */
  @Input() actionText = 'Go home';

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
