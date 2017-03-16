import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CategoriaListComponent } from './components/categoria-list.component'
import { CategoriaAddComponent } from './components/categoria-add.component'
import { CategoriaDetailComponent } from './components/categoria-detail.component'
import { CategoriaEditComponent } from './components/categoria-edit.component'


const appRoutes : Routes = [
  {path:'',component:CategoriaListComponent}, //ruta por defecto
  {path:'categoria/:id',component:CategoriaDetailComponent},
  {path:'editar-categoria/:id',component:CategoriaEditComponent},
  {path:'crear-categoria',component:CategoriaAddComponent},
  {path:'**',component:CategoriaListComponent}, //cuando no existe la url

];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
