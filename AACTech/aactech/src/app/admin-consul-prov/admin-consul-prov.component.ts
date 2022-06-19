import { Component, OnInit } from '@angular/core';
import Proveedores from '../interfaces/proveedores';
import { DataproveService } from '../services/dataprove.service';

@Component({
  selector: 'app-admin-consul-prov',
  templateUrl: './admin-consul-prov.component.html',
  styleUrls: ['./admin-consul-prov.component.css']
})
export class AdminConsulProvComponent implements OnInit {

  proveedor: Proveedores[];

  constructor(private dataproveService: DataproveService) {
    this.proveedor= [{
      nombre: 'Prueba',
      rfc: 'aa',
      direccion: 'aa',
      ciudad: 'aa'
    }];
   }

   ngOnInit(): void {
    this.dataproveService.getProv().subscribe(proveedor=>{
      this.proveedor=proveedor;
      console.log(proveedor);
    });
  }

  async onClickDelete(proveedor: Proveedores){
    const response = await this.dataproveService.deleteProv(proveedor);
    console.log(response);
  }

}
