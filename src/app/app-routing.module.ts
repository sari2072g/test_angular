import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/section-7/home/home.component';
import { NotFoundComponent } from './components/section-7/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'elements', loadChildren: () =>
      import('./modules/element/element.module').
        then((m) => m.ElementModule)
  },
  {
    path: 'collection', loadChildren: () =>
      import('./modules/collection/collection.module').
        then((m) => m.CollectionModule)
  },
  {
    path: 'view', loadChildren: () =>
      import('./modules/views/views.module').
        then((m) => m.ViewsModule)
  },
  {
    path: 'modules', loadChildren: () =>
      import('./modules/modules/modules.module').
        then((m) => m.ModulesModule)
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
