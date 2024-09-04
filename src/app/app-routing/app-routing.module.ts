import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { StockListComponent } from '../components/stock-list/stock-list.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'stocks', component: StockListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
