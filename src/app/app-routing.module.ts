import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'studio', component: StudioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
