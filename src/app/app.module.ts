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
import { D3Service, D3_DIRECTIVES } from './featured/context-dependence-interact/d3/';
import { SHARED_VISUALS } from './featured/context-dependence-interact/visuals/shared';
import { GraphComponent } from './featured/context-dependence-interact/visuals/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    DomainDesignComponent,
    ContextDependenceInteractComponent,
    GraphComponent,

    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
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
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
