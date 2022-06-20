import { Component, OnInit } from '@angular/core';
import Pedidos from '../interfaces/pedidos';
import { DatapedidosService } from '../services/datapedidos.service';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-admin-consul-pedidos',
  templateUrl: './admin-consul-pedidos.component.html',
  styleUrls: ['./admin-consul-pedidos.component.css']
})
export class AdminConsulPedidosComponent implements OnInit {

  pedidos: Pedidos[];

  constructor(private dataPedido: DatapedidosService,private clienteService: CarritoService) {
    this.pedidos=[{
      nombre: '',
      precio: ' ',
      marca: ' ',
      cliente: ' '

    }]
   }

  ngOnInit(): void {
     this.pedidosGen();
  }

  pedidosGen(){
    this.clienteService.getCarrito().subscribe(pedidos=>{
      this.pedidos=pedidos;
      console.log(pedidos);
    });
  } 

}
