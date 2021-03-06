import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  /**
   * general pages (including the ** route)
   */
  { path: 'oauth', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOauthPopupPageModule) },
  {
    path: 'terms',
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixTermsPageModule),
    data: {
      i18n: true,
      ids: {
        'en-US': 'terms',
        'vi-VN': 'dieu-khoan',
      },
    }
  },
  {
    path: 'privacy',
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixPrivacyPageModule),
    data: {
      i18n: true,
      ids: {
        'en-US': 'privacy',
        'vi-VN': 'bao-mat',
      },
    }
  },
  {
    path: 'bao-mat',
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixPrivacyPageModule),
    data: {
      id: 'bao-mat',
    }
  },
  {
    path: 'setting',
    loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixSettingPageModule),
    data: {
      i18n: true,
    }
  },
  
  /**
   * documentation pages
   */
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), pathMatch: 'full' },
  // guides
  { path: 'guides', loadChildren: () => import('./pages/guides/guides.module').then(m => m.GuidesPageModule) },
  { path: 'guide/:id', loadChildren: () => import('./pages/guide/guide.module').then(m => m.GuidePageModule) },
  // templates
  { path: 'templates', loadChildren: () => import('./pages/templates/templates.module').then(m => m.TemplatesPageModule) },
  { path: 'template/:id', loadChildren: () => import('./pages/template/template.module').then(m => m.TemplatePageModule) },
  // splashscreens
  { path: 'splashscreens', loadChildren: () => import('./pages/splashscreens/splashscreens.module').then(m => m.SplashscreensPageModule) },
  { path: 'splashscreen/heartbeat', loadChildren: () => import('./pages/splashscreen/heartbeat/heartbeat.module').then(m => m.HeartbeatPageModule) },
  { path: 'splashscreen/bouncing', loadChildren: () => import('./pages/splashscreen/bouncing/bouncing.module').then(m => m.BouncingPageModule) },
  { path: 'splashscreen/still', loadChildren: () => import('./pages/splashscreen/still/still.module').then(m => m.StillModule) },
  // components
  { path: 'components', loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsPageModule) },
  { path: 'component/header', loadChildren: () => import('./pages/component/header/header.module').then(m => m.HeaderPageModule) },
  { path: 'component/header2nd', loadChildren: () => import('./pages/component/header2nd/header2nd.module').then(m => m.Header2ndPageModule) },
  { path: 'component/footer', loadChildren: () => import('./pages/component/footer/footer.module').then(m => m.FooterPageModule) },
  { path: 'component/oops', loadChildren: () => import('./pages/component/oops/oops.module').then(m => m.OopsPageModule) },
  { path: 'component/spinner', loadChildren: () => import('./pages/component/spinner/spinner.module').then(m => m.SpinnerPageModule) },
  { path: 'component/content', loadChildren: () => import('./pages/component/content/content.module').then(m => m.ContentPageModule) },
  { path: 'component/nav-indicator', loadChildren: () => import('./pages/component/nav-indicator/nav-indicator.module').then(m => m.NavIndicatorPageModule) },
  { path: 'component/pwa-box', loadChildren: () => import('./pages/component/pwa-box/pwa-box.module').then(m => m.PwaBoxPageModule) },
  { path: 'component/pwa-reminder', loadChildren: () => import('./pages/component/pwa-reminder/pwa-reminder.module').then(m => m.PwaReminderPageModule) },
  // pages
  { path: 'pages', loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesPageModule) },
  { path: 'page/oauth-popup', loadChildren: () => import('./pages/page/oauth-popup/oauth-popup.module').then(m => m.OauthPopupPageModule) },
  { path: 'page/oops', loadChildren: () => import('./pages/page/oops/oops.module').then(m => m.OopsPageModule) },
  { path: 'page/terms', loadChildren: () => import('./pages/page/terms/terms.module').then(m => m.TermsPageModule) },
  { path: 'page/privacy', loadChildren: () => import('./pages/page/privacy/privacy.module').then(m => m.PrivacyPageModule) },
  { path: 'page/setting', loadChildren: () => import('./pages/page/setting/setting.module').then(m => m.SettingPageModule) },

  { path: '**', loadChildren: () => import('@lamnhan/nguix-starter').then(m => m.NguixOopsPageModule) },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
