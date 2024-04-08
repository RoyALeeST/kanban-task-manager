import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLineTroughText]'
})
export class LineTroughTextDirective {

  @HostBinding('class')
  className = 'dashed-text';

}
