import { Component, OnInit } from '@angular/core';
import Ingresos from '../interfaces/ingresos';
import { DataingreService } from '../services/dataingre.service';

@Component({
  selector: 'app-admin-consul-ingresos',
  templateUrl: './admin-consul-ingresos.component.html',
  styleUrls: ['./admin-consul-ingresos.component.css']
})
export class AdminConsulIngresosComponent implements OnInit {

  ingreso: Ingresos[];

  constructor(private dataIngreService: DataingreService) {
    this.ingreso=[{
      productos: '',
      precio:''
    }]
   }

  ngOnInit(): void {
    this.dataIngreService.getingresos().subscribe(ingreso=>{
      this.ingreso=ingreso;
      console.log(ingreso);
    });
  }

  async onClickDelete(ingreso: Ingresos){
    const response = await this.dataIngreService.deleteingreso(ingreso);
    console.log(response);
  }

}
