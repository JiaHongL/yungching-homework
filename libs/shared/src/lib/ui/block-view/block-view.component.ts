import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'express-block-view',
  standalone:true,
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss'],
  animations: [
    trigger('animate', [
      transition('* => fadeIn', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition('fadeIn => void, * => fadeOut', [
        style({ opacity: 1 }),
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class BlockViewComponent implements OnInit {
  @HostBinding('@animate') state = 'fadeIn';

  constructor() {}

  ngOnInit(): void {}
}
