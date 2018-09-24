import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ProdEditComponent } from './prod-edit/prod-edit.component';
import { ProdCreateComponent } from './prod-create/prod-create.component';
import { ProductComponent } from './product/product.component';
import { ProdListComponent } from './prod-list/prod-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductComponent, children:[{path:'', component: ProdListComponent, children:[{path: '', component:ListComponent},{path:'edit/:id', component:ProdEditComponent},]}, {path:'new', component:ProdCreateComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
