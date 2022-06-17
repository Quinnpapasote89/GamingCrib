import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/services/global.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  validarSpeak: GlobalService; 
  userLogged=this.authService.getUserLogged();

  constructor(private router: Router, private global: GlobalService,private authService: AuthService) {
    this.validarSpeak=global;
  }


  ngOnInit(): void {
  }

  habilitarboton(){
    this.global.band=!this.global.band; 
  }

  logout(){
    this.authService.logout();
  }

  usuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    })
  }

}
