import { Component, OnInit } from '@angular/core';
import Productos from '../interfaces/productos';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-consul-prod',
  templateUrl: './admin-consul-prod.component.html',
  styleUrls: ['./admin-consul-prod.component.css']
})
export class AdminConsulProdComponent implements OnInit {

  productos: Productos[];

  constructor(private dataService: DataService) {
    this.productos= [{
      nombre: 'Prueba',
      marca: 'aa',
      categoria: 'aa',
      descripcion: 'aa',
      precio: 'aa'
    }];
   }

  ngOnInit(): void {
    this.dataService.getProductos().subscribe(productos=>{
      this.productos=productos;
      console.log(productos);
    });
  }

  async onClickDelete(producto: Productos){
    const response = await this.dataService.deleteProd(producto);
    console.log(response);
  }

}
