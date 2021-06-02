import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { MetaService, SettingService, PageDataService } from '@lamnhan/ngx-useful';

@Component({
  selector: 'nguix-privacy-page',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyPage implements OnInit {

  /**
   * @ignore
   */
  public readonly page$ = this.route.data.pipe(
    // retrieve data
    map(data => ({
      i18n: this.i18n,
      id: this.id,
      ids: this.ids,
      ...data,
    })),
    // get locale
    switchMap(data =>
      combineLatest([
        of(data),
        !data.i18n
          ? of('en-US')
          : this.settingService.onLocaleChanged
      ])
    ),
    // get the page
    switchMap(([data, locale]) =>
      this.pageDataService.getDoc(
        !data.i18n
          ? data.id
          : data.ids[locale] || data.ids['en-US'],
        { time: 10080 /* 7 days */ }
      )
    ),
    // change metas
    tap(page =>
      !page
        ? false
        : this.metaService.changePageMetas({ title: page.title, description: page.excerpt})
    ),
  );

  /**
   * Enable localization.
   */
  i18n = false;

  /**
   * Privacy page id.
   */
  id = 'privacy';

  /**
   * List of privacy page localized ids.
   */
  ids: Record<string, string> = {
    'en-US': 'privacy',
  };

  constructor(
    private route: ActivatedRoute,
    /**
     * Inject() Requires the [MetaService](https://ngx-useful.lamnhan.com/service/meta)
     */
    public readonly metaService: MetaService,
    /**
     * Inject() Requires the [SettingService](https://ngx-useful.lamnhan.com/service/setting)
     */
    public readonly settingService: SettingService,
    /**
     * Inject() Requires the [PageDataService](https://ngx-useful.lamnhan.com/schemata/service/page)
     */
    public readonly pageDataService: PageDataService,
  ) {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

}
