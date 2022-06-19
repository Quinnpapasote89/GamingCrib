import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage, Storage, ref } from '@angular/fire/storage'
import { getDownloadURL, list, listAll } from 'firebase/storage';
import Productos from '../interfaces/productos';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Productos[];
  aux= 0;

  images: string[] = [];
  imagen!: string;
  
  constructor(private router: Router,private storage:Storage,private dataService: DataService) {
    this.productos= [{
      nombre: '',
      marca: '',
      categoria: '',
      descripcion: '',
      precio: '',
      fuenteImagen: ' ',
      fuenteOrigen: ' '
    }];
   }

  ngOnInit(): void {
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

  guardarInfo(){
    
  }

}
