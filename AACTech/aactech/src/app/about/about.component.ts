import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  validarSpeak: GlobalService; 
  mensaje: any;
  oracion: any;

  constructor(global: GlobalService) { 
    if ('speechSynthesis' in window) {
      this.mensaje = new SpeechSynthesisUtterance();
    } else {
      alert("Lo siento, el navegador no es compatible");
    }
    this.validarSpeak = global;
    console.log(this.validarSpeak);
  }


  ngOnInit(): void {
  }

  playSpeak(t1:string) {  
    this.oracion = document.getElementById(t1)!.innerHTML;
    this.mensaje.text= this.oracion; 
    if(speechSynthesis.paused){
      speechSynthesis.resume();
    }else{
      speechSynthesis.cancel();
      speechSynthesis.speak(this.mensaje);
    }
  }

  stopSpeak(){
    speechSynthesis.pause();
  }

}
