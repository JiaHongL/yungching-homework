import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @ViewChild('btn', { static: true }) button!: ElementRef;

  @Input('class') set class(value: string) {
    const classList = value.split(' ');
    setTimeout(() => {
      const formFieldClassList = this.button.nativeElement.classList;
      classList.forEach((className) => {
        formFieldClassList.add(className);
      });
    });
  }

  @Output() buttonClick = new EventEmitter<any>();

}
