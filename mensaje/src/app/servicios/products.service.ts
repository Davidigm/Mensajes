import { Injectable } from '@angular/core';
import { Product } from '../modelos/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productos: Product[] = [

    { id:1, name:"Mouse Gamer", price:450, description:"Mouse RGB" },
    { id:2, name:"Teclado Mecánico", price:900, description:"Switch Blue" },
    { id:3, name:"Monitor", price:3000, description:"Monitor 24 pulgadas" },
    { id:4, name:"Laptop", price:15000, description:"Laptop i5 16GB RAM" }

  ];

  getProducts(){

    return this.productos;

  }

}