import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[#scoreboardHost]',
})
export class ScoreBoardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}