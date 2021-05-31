import { Component, OnInit, Input } from '@angular/core';

import {PwaService} from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-pwa-reminder',
  templateUrl: './pwa-reminder.component.html',
  styleUrls: ['./pwa-reminder.component.scss']
})
export class PwaReminderComponent implements OnInit {
  @Input() i18n = false;

  @Input('pwaService') pwa!: PwaService;

  @Input() icon = '/icons/icon-72x72.png';
  @Input() title = 'Install app?';
  @Input() text = 'Add app to your home screen';

  @Input() iosSafariMessage: string | string[];
  @Input() iosAnyMessage: string | string[];

  @Input() androidChromeMessage: string | string[];
  @Input() androidAnyMessage: string | string[];

  @Input() desktopChromeMessage: string | string[];
  @Input() desktopAnyMessage: string | string[];

  @Input() dismissText = 'Already installed';
  @Input() hideText = 'Remind me later';

  constructor() {
    this.iosSafariMessage = [
      'Click the Share button',
      'Then, Add to home screen',
    ];
    this.iosAnyMessage = [
      'Open this website using the Safari browser',
      ...this.iosSafariMessage,
    ];

    this.androidChromeMessage = [
      'Click the menu at the top right corner',
      'Then, Install app ...',
    ];
    this.androidAnyMessage = [
      'Open this website using the Chrome browser',
      ...this.androidChromeMessage,
    ];

    this.desktopChromeMessage = [
      'Click the Install button in the address bar',
      'Then, Install',
    ];
    this.desktopAnyMessage = [
      'Open this website using the Chrome browser',
      ...this.desktopChromeMessage,
    ];
  }

  ngOnInit(): void {}

  getI18nMessageCode() {
    return 'USEFUL_PWA_REMINDER.MESSAGE.'
      + (this.pwa.runtime || 'desktop-any').replace(/-/g, '_').toUpperCase();
  }

  getMessage() {
    let msg: string | string[] = '';
    switch (this.pwa.runtime) {
      case 'ios-safari':
        msg = this.iosSafariMessage;
        break;
      case 'ios-any':
        msg = this.iosAnyMessage;
        break;
      case 'android-chrome':
        msg = this.androidChromeMessage;
        break;
      case 'android-any':
        msg = this.androidAnyMessage;
        break;
      case 'desktop-chrome':
        msg = this.desktopChromeMessage;
        break;
      case 'desktop-any':
      default:
        msg = this.desktopAnyMessage;
        break;
    }
    return typeof msg === 'string'
      ? msg
      : '<ul><li>' + msg.join('</li><li>') + '</li></ul>';
  }
}