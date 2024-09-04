import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  product: Product = { id: 0, name: '', description: '', price: 0 };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product);
    this.product = { id: 0, name: '', description: '', price: 0 };
  }
}
