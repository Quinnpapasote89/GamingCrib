import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage, ref, uploadBytes } from '@angular/fire/storage'
import { getDownloadURL, listAll } from 'firebase/storage';
import Productos from '../interfaces/productos';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Productos[];

  constructor(private router: Router,private storage:Storage,private dataService: DataService) {
    this.productos= [{
      nombre: '',
      marca: '',
      categoria: '',
      descripcion: '',
      precio: '',
      fuenteImagen: ' '
    }];
   }

  ngOnInit(): void {
    this.dataService.getProductos().subscribe(productos=>{
      this.productos=productos;
      console.log(productos);
    });
  }

  getImage(img:string){
    const imagesRef = ref(this.storage, 'images/'+img);

    getDownloadURL(imagesRef).then((url) => {
      const img = document.getElementById('prod'+0);
      img?.setAttribute('src',url);
    })

    
  }

}
