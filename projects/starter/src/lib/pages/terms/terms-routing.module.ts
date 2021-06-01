import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsPage } from './terms.component';

const routes: Routes = [{ path: '', component: TermsPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule {}
