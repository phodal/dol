import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainDesignComponent } from './featured/domain-design/domain-design.component';
import { ContextDependenceInteractComponent } from './featured/context-dependence-interact/context-dependence-interact.component';


const routes: Routes = [
  {
    path: '',
    component: DomainDesignComponent
  }, {
    path: 'context-dependence-interact',
    component: ContextDependenceInteractComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
