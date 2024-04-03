import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-link',
  templateUrl: './sidenav-link.component.html',
  styleUrl: './sidenav-link.component.scss'
})
export class SidenavLinkComponent {
  @Input()
  displayText?: string;

  @Input()
  materialIconKey?: string;

  @Input()
  routerLink?: string;

  @Input()
  routerLinkActiveOptions: { exact: boolean } = { exact: false };
}
