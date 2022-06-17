import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

declare global{
  interface Window{
    res:any;
    recaptchaVerifier:firebase.auth.RecaptchaVerifier;
    grecaptcha:any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  //Aqui es el registro por medio de correo y contraseña
  async login(email:string,password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email,password);
    }catch(err){
      console.log("Error en login ",err);
      return null;
    }
  }

  async register(email:string,password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    }catch(err){
      console.log("Error en login ",err);
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logout(){
    this.afauth.signOut();
  }

  //Registro por Celular

  mandarCodigo(numero:string, appVerified:any){
    return this.afauth.signInWithPhoneNumber(numero,appVerified).then(confirmation=>{
      window.res=confirmation;
    }).catch(err=>{
      console.log(err);
    });

  }
  verificarCodigo(codigo:string){
    return window.res.confirm(codigo).then((result:any)=>{
      let credenciales = firebase.auth.PhoneAuthProvider.credential(window.res.verificationId,codigo);
      this.afauth.signInWithCredential(credenciales);
    })
  }
}
