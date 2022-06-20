import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage, Storage, ref } from '@angular/fire/storage'
import { getDownloadURL, list, listAll } from 'firebase/storage';
import Productos from '../interfaces/productos';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/services/global.service';
import { AuthService } from '../services/auth.service';
import { CarritoService } from '../services/carrito.service';
import Pedidos from '../interfaces/pedidos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Productos[];
  carrito: Pedidos;

  images: string[] = [];
  imagen!: string;
  usuario: String | null | undefined;
  
  constructor(private router: Router,private storage:Storage,private dataService: DataService,private global: GlobalService,private authService: AuthService, private clienteService: CarritoService) {
    this.productos= [{
      nombre: '',
      marca: '',
      categoria: '',
      descripcion: '',
      precio: '',
      fuenteImagen: ' ',
      fuenteOrigen: ' '
    }];

    this.carrito={
      nombre: '',
      precio: '',
      marca: '',
      cliente: ''
    }
   }

  ngOnInit(): void {
    this.usuarioLogeado();
    this.dataService.getProductos().subscribe(productos=>{
      this.productos=productos;
      console.log(productos);
    });
  }


  getImages(id:string): void{
    const storage = getStorage();
    const starRef = ref(storage, id);
    console.log(id);
     getDownloadURL(starRef)
    .then(url => {
      return(url);
    }); 
  }

  cargarImagen(id:any,nombre:any){
    document?.getElementById(""+id)?.setAttribute('src', 'assets/img/imgProd/'+nombre);
  }

  async guardarInfo(nombre:string,marca:string,precio:string){
    this.carrito.cliente=JSON.stringify(this.usuario);
    this.carrito.nombre=nombre;
    this.carrito.marca=marca;
    this.carrito.precio=precio;
    const response = await this.clienteService.addCarrito(this.carrito);
  }

  usuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      this.usuario=res?.email;
    })
  } 
}
