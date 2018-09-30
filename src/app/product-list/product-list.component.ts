import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  /**
   * @Input productList - the Product[] passed to us
   */
  @Input() productList: Product[];

  /**
   * @Output onProductSelected - outputs the current Product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter<Product>();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
