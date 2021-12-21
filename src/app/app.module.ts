import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BuilderModule } from '@builder.io/angular';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [AppComponent, FooComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BuilderModule.forRoot('7586388966a8498d98024cc1a85db023'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
