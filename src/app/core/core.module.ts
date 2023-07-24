import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RankingCardComponent } from './components/ranking-card/ranking-card.component';
import { ChampionsCardComponent } from './components/champions-card/champions-card.component';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    RankingCardComponent,
    ChampionsCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    SharedModule,
  ],
  exports: [NavComponent, HomeComponent],
})
export class CoreModule {}
