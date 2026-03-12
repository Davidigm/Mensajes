import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  constructor(public carritoService: CarritoService) {}

  exportarXML(){

    const productos = this.carritoService.obtenerCarrito();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += `<recibo>`;

    productos.forEach(p => {

      xml += `
      <producto>
      <id>${p.id}</id>
      <nombre>${p.name}</nombre>
      <precio>${p.price}</precio>
      <descripcion>${p.description}</descripcion>
      </producto>
      `;

    });

    xml += `<total>${this.carritoService.total()}</total>`;
    xml += `</recibo>`;

    const blob = new Blob([xml], { type: "application/xml" });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "recibo.xml";
    a.click();

  }

}