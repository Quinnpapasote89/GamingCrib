import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailsendService } from '../mailsend.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto!: FormGroup;

  constructor(private router: Router, private mail:MailsendService) { }

  ngOnInit(): void {
    this.contacto = new FormGroup({
      nombre: new FormControl(' ', [Validators.required, Validators.minLength(4)]),
      email: new FormControl(' ', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      asunto: new FormControl(' ',[Validators.required, Validators.minLength(10)]),
      mensaje: new FormControl(' ',[Validators.required, Validators.minLength(20)]),
    });
  }

  get nombre() { return this.contacto.get('nombre'); }

  get email() { return this.contacto.get('email'); }

  get asunto() {return this.contacto.get('asunto');}

  get mensaje() {return this.contacto.get('mensaje');}

  envioEmail(){
    let info = {
      nombreF: this.nombre?.value,
      emailF: this.email?.value,
      asuntoF: this.asunto?.value,
      mensajeF: this.mensaje?.value
    }
    this.mail.enviarEmail("http://localhost:3080/sendmail", info).subscribe(
      (data: any) => {
        let res:any = data; 
      },
    );
  }

}
