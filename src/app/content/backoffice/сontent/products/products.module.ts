import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsService } from './products.service';
import { OneProductComponent } from './one-product/one-product.component';


@NgModule({
  declarations: [ProductsComponent, ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: OneProductComponent
      }
    ])
  ],
  providers: [ProductsService]
})
export class ProductsModule {
}
