import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario={
    email: '',
    password: ''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Ingresar(){
    console.log(this.usuario);
  }

}
