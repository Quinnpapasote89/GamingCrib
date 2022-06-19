import { Component, OnInit } from '@angular/core';
import Pedidos from '../interfaces/pedidos';
import { DatapedidosService } from '../services/datapedidos.service';

@Component({
  selector: 'app-admin-consul-pedidos',
  templateUrl: './admin-consul-pedidos.component.html',
  styleUrls: ['./admin-consul-pedidos.component.css']
})
export class AdminConsulPedidosComponent implements OnInit {

  pedido: Pedidos[];

  constructor(private dataPedido: DatapedidosService) {
    this.pedido=[{
      nombre: '',
      precio: '',
      cliente: ''
    }]
   }

  ngOnInit(): void {
    this.dataPedido.getpedidos().subscribe(pedido=>{
      this.pedido=pedido;
      console.log(pedido);
    });
  }

  async onClickDelete(pedido: Pedidos){
    const response = await this.dataPedido.deletepedido(pedido);
    console.log(response);
  }

}
