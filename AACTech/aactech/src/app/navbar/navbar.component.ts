import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  validarSpeak: GlobalService;

  constructor(private router: Router, private global: GlobalService) {
    this.validarSpeak = global;
  }

  ngOnInit(): void {}

  habilitarboton() {
    this.global.band = !this.global.band;
  }
}
