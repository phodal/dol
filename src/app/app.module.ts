import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainDesignComponent } from './featured/domain-design/domain-design.component';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
  declarations: [
    AppComponent,
    DomainDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
