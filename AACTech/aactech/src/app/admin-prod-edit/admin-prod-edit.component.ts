import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-prod-edit',
  templateUrl: './admin-prod-edit.component.html',
  styleUrls: ['./admin-prod-edit.component.css']
})
export class AdminProdEditComponent implements OnInit {
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

}
