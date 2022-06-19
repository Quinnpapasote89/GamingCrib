import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataproveService } from '../services/dataprove.service';

@Component({
  selector: 'app-admin-add-prov',
  templateUrl: './admin-add-prov.component.html',
  styleUrls: ['./admin-add-prov.component.css']
})
export class AdminAddProvComponent implements OnInit {

  formulario: FormGroup;
  DataproveService: any;

  constructor(private dataproveService: DataproveService) { 
    this.formulario=new FormGroup({
      nombre: new FormControl(),
      rfc: new FormControl(),
      direccion: new FormControl(),
      ciudad: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    const response = await this.dataproveService.addProv(this.formulario.value);
    console.log(response);
  }

}
