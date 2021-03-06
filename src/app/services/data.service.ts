import { Injectable } from '@angular/core';
import { NavItem, MenuItem } from '@lamnhan/ngx-useful';

interface TemplateItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  exampleMenuItems: MenuItem[] = [
    { text: 'Link 1', routerLink: ['link-1'] },
    { text: 'Link 2', routerLink: ['link-2'] },
    { text: 'Link 3', href: 'https://lamnhan.com', target: '_blank' },
  ];
  
  templateItems: Record<string, TemplateItem> = {
    intro: {
      id: 'intro',
      title: 'Intro',
      description: 'General landing page template',
      thumbnail: 'http://source.unsplash.com/SymZoeE8quA/768x480',
    },
    blog: {
      id: 'blog',
      title: 'Blog',
      description: 'General bloging template',
      thumbnail: 'http://source.unsplash.com/3GZNPBLImWc/768x480',
    },
    shop: {
      id: 'shop',
      title: 'Shop',
      description: 'Online shoping template',
      thumbnail: 'http://source.unsplash.com/c9FQyqIECds/768x480',
    },
  };

  // guides
  guideMenu: NavItem[] = [
    {
      text: 'Getting started',
      level: 0
    },
      {
        text: 'Introduction',
        level: 1,
        routerLink: ['guide', 'introduction']
      },
      {
        text: 'Contribution',
        level: 1,
        routerLink: ['guide', 'contribution']
      },
  ];

  // components
  componentMenu: NavItem[] = [
    {
      text: 'Layout',
      level: 0,
    },
      {
        text: 'Header',
        level: 1,
        routerLink: ['component', 'header']
      },
      {
        text: 'Header 2nd',
        level: 1,
        routerLink: ['component', 'header2nd']
      },
      {
        text: 'Footer',
        level: 1,
        routerLink: ['component', 'footer']
      },
    {
      text: 'Misc',
      level: 0,
    },
      {
        text: 'Oops',
        level: 1,
        routerLink: ['component', 'oops']
      },
      {
        text: 'Spinner',
        level: 1,
        routerLink: ['component', 'spinner']
      },
      {
        text: 'Content',
        level: 1,
        routerLink: ['component', 'content']
      },
      {
        text: 'Nav Indicator',
        level: 1,
        routerLink: ['component', 'nav-indicator']
      },
      {
        text: 'PWA Box',
        level: 1,
        routerLink: ['component', 'pwa-box']
      },
      {
        text: 'PWA Reminder',
        level: 1,
        routerLink: ['component', 'pwa-reminder']
      },
  ];

  // pages
  pageMenu: NavItem[] = [
    {
      text: 'General',
      level: 0,
    },
      {
        text: 'Oops',
        level: 1,
        routerLink: ['page', 'oops']
      },
      {
        text: 'Terms',
        level: 1,
        routerLink: ['page', 'terms']
      },
      {
        text: 'Privacy',
        level: 1,
        routerLink: ['page', 'privacy']
      },
      {
        text: 'Setting',
        level: 1,
        routerLink: ['page', 'setting']
      },
    {
      text: 'Others',
      level: 0,
    },
      {
        text: 'Oauth Popup',
        level: 1,
        routerLink: ['page', 'oauth-popup']
      },
  ];

  // splashscreen
  splashscreenMenu: NavItem[] = [
    {
      text: 'Logo',
      level: 0,
    },
      {
        text: 'Still',
        level: 1,
        routerLink: ['splashscreen', 'still']
      },
      {
        text: 'Heartbeat',
        level: 1,
        routerLink: ['splashscreen', 'heartbeat']
      },
      {
        text: 'Bouncing',
        level: 1,
        routerLink: ['splashscreen', 'bouncing']
      },
  ];

  // templates
  templateMenu: NavItem[] = [
    {
      text: 'Blank',
      level: 1,
      routerLink: ['template', 'blank']
    },
    {
      text: 'Blog',
      level: 1,
      routerLink: ['template', 'blog']
    },
    {
      text: 'Shop',
      level: 1,
      routerLink: ['template', 'shop']
    },
  ];

  constructor() { }
}
