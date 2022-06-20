import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/services/global.service';
import { AuthService } from '../services/auth.service';
import { CarritoService } from '../services/carrito.service';
import Pedidos from '../interfaces/pedidos';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  usuario!: String;
  pedidos: Pedidos[];

  constructor(private global: GlobalService,private authService: AuthService, private clienteService: CarritoService,private dataService: DataService) { 
    this.pedidos=[{
      nombre: '',
      precio: '',
      marca: '',
      cliente: ''
    }];

  }

  ngOnInit(): void {
    this.usuarioLogeado();
  }

  usuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      this.usuario=JSON.stringify(res?.email);
    })
    this.clienteService.getCarrito().subscribe(pedidos=>{
      this.pedidos=pedidos;
      console.log(pedidos);
    });
  }    
}
