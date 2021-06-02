import { Component, OnInit, Input } from '@angular/core';

import {PwaService} from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-pwa-reminder',
  templateUrl: './pwa-reminder.component.html',
  styleUrls: ['./pwa-reminder.component.scss']
})
export class PwaReminderComponent implements OnInit {
  
  /**
   * Input() Enable localization
   */
  @Input() i18n = false;

  /**
   * Input() Reminder title. For i18n: `NGUIX_PWA_REMINDER.TITLE` = Install app?
   */
  @Input() title = 'Install app?';

  /**
   * Input() App icon
   */
  @Input() icon = '/assets/images/logo.svg';

  /**
   * Input() Description text. For i18n: `NGUIX_PWA_REMINDER.TEXT` = Add app to ...
   */
  @Input() text = 'Add app to your home screen';

  /**
   * Input() Install message for IOS with Safari. For i18n: `NGUIX_PWA_REMINDER.MESSAGES.IOS_SAFARI` = ...
   */
  @Input() iosSafariMessage: string | string[];

  /**
   * Input() Install message for IOS with other browsers. For i18n: `NGUIX_PWA_REMINDER.MESSAGES.IOS_ANY` = ...
   */
  @Input() iosAnyMessage: string | string[];

  /**
   * Input() Install message for Android with Chrome. For i18n: `NGUIX_PWA_REMINDER.MESSAGES.ANDROID_CHROME` = ...
   */
  @Input() androidChromeMessage: string | string[];

  /**
   * Input() Install message for Android with other browsers. For i18n: `NGUIX_PWA_REMINDER.MESSAGES.ANDROID_ANY` = ...
   */
  @Input() androidAnyMessage: string | string[];

  /**
   * Input() Install message for Desktop with Chrome. For i18n: `NGUIX_PWA_REMINDER.MESSAGES.DESKTOP_CHROME` = ...
   */
  @Input() desktopChromeMessage: string | string[];

  /**
   * Input() Install message for Desktop with other browsers. For i18n: `NGUIX_PWA_REMINDER.MESSAGES.DESKTOP_ANY` = ...
   */
  @Input() desktopAnyMessage: string | string[];

  /**
   * Input() Dismiss button text. For i18n: `NGUIX_PWA_REMINDER.DISMISS_TEXT` = Already installed
   */
  @Input() dismissText = 'Already installed';

  /**
   * Input() Hide button text. For i18n: `NGUIX_PWA_REMINDER.HIDE_TEXT` = Remind me later
   */
  @Input() hideText = 'Remind me later';

  constructor(
    /**
     * Inject() Requires the [PwaService](https://ngx-useful.lamnhan.com/service/pwa)
     */
    public readonly pwaService: PwaService,
  ) {
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

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  getI18nMessageCode() {
    return 'NGUIX_PWA_REMINDER.MESSAGES.'
      + (this.pwaService.runtime || 'desktop-any').replace(/-/g, '_').toUpperCase();
  }

  /**
   * @ignore
   */
  getMessage() {
    let msg: string | string[] = '';
    switch (this.pwaService.runtime) {
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
