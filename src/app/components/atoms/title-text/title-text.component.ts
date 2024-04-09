import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrl: './title-text.component.scss'
})
export class TitleTextComponent {
  @Input()
  displayText?: string;
}
