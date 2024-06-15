import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MenuSection } from '@shared/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Input() isLoading: boolean;
  @Input() menuSections: MenuSection[];

  isHandset$: Observable<boolean> = this.breakpointObserver$
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver$: BreakpointObserver) {}
}
