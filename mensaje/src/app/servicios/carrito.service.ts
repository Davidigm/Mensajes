import { Injectable } from '@angular/core';
import { Product } from '../modelos/product';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: Product[] = [];

  agregar(producto: Product){

    this.carrito.push(producto);

  }

  obtenerCarrito(){

    return this.carrito;

  }

  total(){

    return this.carrito.reduce((sum,p)=> sum + p.price ,0);

  }

}