import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { GestureConfig } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import 'hammerjs';
import { SharedModule } from './shared/shared.module';

declare var Hammer: any;
@Injectable()
export class HammerConfig extends GestureConfig {
  buildHammer(element: HTMLElement) {
    return new GestureConfig({ touchAction: 'pan-y' }).buildHammer(element);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    MatSnackBarModule,
    SharedModule
  ],
  entryComponents: [

  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
