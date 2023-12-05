import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

export interface Notification {
  id: number;
  title: string;
  body: string;
}

export enum CollapsedItemBehavior {
  Visible = 'visible',
  HalfVisible = 'half-visible',
  Hidden = 'hidden',
}

const NUMBER_OF_HALF_VISIBLE_ITEMS = 3;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  [x: string]: any;
  notifications: Notification[] = [
    {
      id: 1,
      title: 'Notification 1',
      body: 'This is the first notification',
    },
    {
      id: 2,
      title: 'Notification 2',
      body: 'This is the second notification',
    },
    {
      id: 3,
      title: 'Notification 3',
      body: 'This is the third notification',
    },
    {
      id: 4,
      title: 'Notification 4',
      body: 'This is the fourth notification',
    },
    {
      id: 5,
      title: 'Notification 5',
      body: 'This is the fifth notification',
    },
    {
      id: 6,
      title: 'Notification 6',
      body: 'This is the sixth notification',
    },
    {
      id: 7,
      title: 'Notification 7',
      body: 'This is the seventh notification',
    },
    {
      id: 8,
      title: 'Notification 8',
      body: 'This is the eighth notification',
    },
    {
      id: 9,
      title: 'Notification 9',
      body: 'This is the ninth notification',
    },
    {
      id: 10,
      title: 'Notification 10',
      body: 'This is the tenth notification',
    },
    {
      id: 11,
      title: 'Notification 11',
      body: 'This is the eleventh notification',
    },
    {
      id: 12,
      title: 'Notification 12',
      body: 'This is the twelfth notification',
    },
    {
      id: 13,
      title: 'Notification 13',
      body: 'This is the thirteenth notification',
    },
    {
      id: 14,
      title: 'Notification 14',
      body: 'This is the fourteenth notification',
    },
    {
      id: 15,
      title: 'Notification 15',
      body: 'This is the fifteenth notification',
    },
    {
      id: 16,
      title: 'Notification 16',
      body: 'This is the sixteenth notification',
    },
    {
      id: 17,
      title: 'Notification 17',
      body: 'This is the seventeenth notification',
    },
    {
      id: 18,
      title: 'Notification 18',
      body: 'This is the eighteenth notification',
    },
    {
      id: 19,
      title: 'Notification 19',
      body: 'This is the nineteenth notification',
    },
    {
      id: 20,
      title: 'Notification 20',
      body: 'This is the twentieth notification',
    },
  ];

  expanded = false;

  protected readonly CollapsedItemBehaviour = CollapsedItemBehavior;

  getCollapsedItemBehaviour(index: number) {
    if (index === 0) {
      return CollapsedItemBehavior.Visible;
    }

    if (index <= NUMBER_OF_HALF_VISIBLE_ITEMS) {
      return CollapsedItemBehavior.HalfVisible;
    }

    return CollapsedItemBehavior.Hidden;
  }
}
