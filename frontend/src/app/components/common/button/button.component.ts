import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() size: 'tiny' | 'small' | 'medium' | 'large' = 'medium';
  @Input() color:
    | 'default'
    | 'red'
    | 'dark-green'
    | 'green'
    | 'white'
    | 'yellow'
    | 'gray' = 'default';
  @Input() class: string = '';
  @Input() disabled!: boolean;
  @Output() onClick = new EventEmitter<boolean>();

  handleClick(event: Event) {
    if (this.disabled) {
      event.stopPropagation();
    } else {
      this.onClick.emit();
    }
  }
}
