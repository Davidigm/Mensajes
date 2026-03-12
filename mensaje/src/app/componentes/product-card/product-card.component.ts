import { Component, Input } from '@angular/core';
import { Product } from '../../modelos/product';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() producto!: Product;

  constructor(private carritoService:CarritoService){}

  agregar(){

    this.carritoService.agregar(this.producto);

    alert("Producto agregado al carrito");

  }

}