import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Storage, ref, uploadBytes } from '@angular/fire/storage'

@Component({
  selector: 'app-admin-addproducto',
  templateUrl: './admin-addproducto.component.html',
  styleUrls: ['./admin-addproducto.component.css']
})
export class AdminAddproductoComponent implements OnInit {

  formulario: FormGroup;
  imgRef:any;
  file:any;

  constructor(private dataService: DataService, private storage:Storage) {
    this.formulario=new FormGroup({
      nombre: new FormControl(' ', [Validators.required, Validators.minLength(4)]),
      marca: new FormControl(' ', [Validators.required]),
      categoria: new FormControl(' ', [Validators.required]),
      descripcion: new FormControl(' ', [Validators.required, Validators.minLength(10)]),
      precio: new FormControl(' ', [Validators.required, Validators.minLength(2)]),
      fuenteImagen: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  onFileChange(event:any){
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
      this.imgRef = ref(this.storage, `images/${this.file.name}`);
      const direccion='images/'+this.file.name;
      this.formulario.patchValue({
        fuenteImagen: direccion
      });
      uploadBytes(this.imgRef,this.file).then(response => console.log(response)).catch(error => console.log(error));
    }
  }

  async onSubmit(){
    const response = await this.dataService.addProducto(this.formulario.value);
    console.log(response);
  }

}

