import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatListModule, MatGridListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BlockTemplateComponent } from './templates/block-template/block-template.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [NavComponent, BlockTemplateComponent, HomeComponent],
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
    MatProgressBarModule
  ],
  exports: [
    NavComponent,
    HomeComponent
  ]
})
export class CoreModule { }
