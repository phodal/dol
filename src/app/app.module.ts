import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainDesignComponent } from './featured/domain-design/domain-design.component';
import { ResizableModule } from 'angular-resizable-element';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ContextDependenceInteractComponent } from './featured/context-dependence-interact/context-dependence-interact.component';

@NgModule({
  declarations: [
    AppComponent,
    DomainDesignComponent,
    ContextDependenceInteractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
    ResizableModule,

    // TODO: extends Angular Material Modules
    MatCardModule,
    OverlayModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
