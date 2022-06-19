import { Component, OnInit } from '@angular/core';
import Productos from '../interfaces/productos';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  productos: Productos[];
  producto: Productos;
  id:any;

  constructor(private dataService: DataService, private route:ActivatedRoute) { 
    this.productos= [{
      nombre: '',
      marca: '',
      categoria: '',
      descripcion: '',
      precio: '',
      fuenteImagen: ' ',
      fuenteOrigen: ' '
    }];

    this.producto= {
      nombre: '',
      marca: '',
      categoria: '',
      descripcion: '',
      precio: '',
      fuenteImagen: ' ',
      fuenteOrigen: '',
    }

  }

  ngOnInit(): void {
    this.dataService.getProductos().subscribe(productos=>{
      this.productos=productos;
      console.log(productos);
    });
  }


  ngAfterContentInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    let tamano= this.productos.length;
    console.log(tamano);
    if(this.productos[0].nombre == this.id){
      console.log("SOMO IGUALES");
    }else{
      console.log(this.productos[0].nombre);
    }
    for(var i=0; i<tamano; i++){
      if(this.productos[i].nombre==this.id){
        console.log("Entro")
        this.producto.categoria=this.productos[i].categoria;
        this.producto.descripcion=this.productos[i].descripcion;
        this.producto.nombre=this.productos[i].nombre;
        this.producto.marca=this.productos[i].marca;
        this.producto.precio=this.productos[i].precio;
        this.producto.fuenteImagen=this.productos[i].fuenteImagen;
        this.producto.id=this.productos[i].id;
        break;
      }
    } 
  }

}


/* */