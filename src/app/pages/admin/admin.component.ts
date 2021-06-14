import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'hts-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.scss'],
  animations: [
    trigger('widthGrow', [
        state('closed', style({
            width: 0,
        })),
        state('open', style({
            width: 250
        })),
        transition('* => *', animate(150))
    ]),
  ]
})
export class AdminComponent {

  constructor(private sidebarService: NbSidebarService) {
  }
  menu = DOC_MENU_ITEMS;

  state = "open";

  changeState(): void {
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }
  
}

export const DOC_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-mail',
    icon: 'email-outline',
    children: [
      {
        title: 'Csoportos email-ek folyamata',
        link: 'inprogressemails',
      },
      {
        title: 'Email csoportok kezelése',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Email mappák kezelése',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Email sémák',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Kapcsolati szerepkörök',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Ütemezett levelek',
        link: '/pages/layout/stepper',
      },
    ]
  },
  {
    title: 'Partner',
    icon: 'award-outline',
    children: []
  },
  {
    title: 'Felhasználó',
    icon: 'person-outline',
    children: []
  },
  {
    title: 'Feladat',
    icon: 'pantone-outline',
    children: []
  },
  {
    title: 'Dokumentum',
    icon: 'archive-outline',
    children: []
  },
  {
    title: 'Alapértelmezett mappák'
  },
  {
    title: 'Arhiválás'
  },
  {
    title: 'Alapértelmezett mappák'
  },
  {
    title: 'Fordító'
  },
  {
    title: 'Naptár kezelése'
  },
  {
    title: 'Súgó kezelése'
  },
  {
    title: 'Ütemezett folyamatok'
  },
];

