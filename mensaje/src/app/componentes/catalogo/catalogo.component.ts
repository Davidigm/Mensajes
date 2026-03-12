import { Component } from '@angular/core';
import { ProductsService } from '../../servicios/products.service';
import { Product } from '../../modelos/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  productos: Product[] = [];

  constructor(private productService: ProductsService) {

    this.productos = this.productService.getProducts();

  }

}