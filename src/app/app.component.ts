import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { initialMenuSections } from '@shared/enums';
import { MenuSection } from '@shared/models';
import {
  AppActions,
  FIFAState,
  getIsMenuLoading,
  getMenuSections,
} from '@shared/state';

export const DEFAULT_LANGUAGE = 'en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ranking de Equipos';

  public isLoading$: Observable<boolean> = this.store$.pipe(
    select(getIsMenuLoading),
  );
  public menuSections$: Observable<MenuSection[]> = this.store$.pipe(
    select(getMenuSections),
  );

  constructor(
    private store$: Store<FIFAState>,
    private translate: TranslateService,
  ) {
    translate.setDefaultLang(DEFAULT_LANGUAGE);
  }

  ngOnInit() {
    this.store$.dispatch(
      AppActions.fetchMenuItems({ payload: initialMenuSections }),
    );
  }
}
