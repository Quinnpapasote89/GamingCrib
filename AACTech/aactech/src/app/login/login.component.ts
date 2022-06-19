import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email: '',
    password: ''
  }

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  singin(){
    const {email,password}=this.usuario;
    this.authService.login(email,password).then(res => {
      console.log("Se inicio Sesion correctamente ",res);
      this.router.navigate(['/inicio']);
    })
  }

}


