import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  greeting = '!Bienvenido';
  message = 'Este es el componente de inicio (home)';
  //crear un contructor vacio con ngOnInit
  constructor() {
    console.log('HomeComponent creado');
  }
  ngOnInit(): void {
    }
}
