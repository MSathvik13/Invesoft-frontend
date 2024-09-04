import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push({ ...product, id: this.products.length + 1 });
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((p) => p.id != id);
  }

  constructor() {}
}
