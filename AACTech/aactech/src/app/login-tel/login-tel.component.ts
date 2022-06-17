import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login-tel',
  templateUrl: './login-tel.component.html',
  styleUrls: ['./login-tel.component.css']
})
export class LoginTelComponent implements OnInit {



  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.captchaCreator();     
    },200)
  }

  captchaCreator(){
    window.recaptchaVerifier= new firebase.auth.RecaptchaVerifier('recaptcha-container');
    window.recaptchaVerifier.render();
  }
  code(numero:string){
    this.authService.mandarCodigo(numero,window.recaptchaVerifier);
  }
  codeVerify(codigo:string){
    this.authService.verificarCodigo(codigo);
    console.log(this.authService.getUserLogged());
    
  }
  obtenerUsuarioLogeado(){
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res);
    });
  }

}
