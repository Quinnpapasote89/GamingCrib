import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-addproducto',
  templateUrl: './admin-addproducto.component.html',
  styleUrls: ['./admin-addproducto.component.css']
})
export class AdminAddproductoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private dataService: DataService) {
    this.formulario=new FormGroup({
      nombre: new FormControl(),
      marca: new FormControl(),
      categoria: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  async onSubmit(){
    const response = await this.dataService.addProducto(this.formulario.value);
    console.log(response);
  }

}
