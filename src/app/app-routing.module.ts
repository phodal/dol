import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainDesignComponent } from './featured/domain-design/domain-design.component';


const routes: Routes = [{
  path: 'domain-design',
  component: DomainDesignComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
