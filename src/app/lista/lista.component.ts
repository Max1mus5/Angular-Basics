import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista: string[]= ['Elemento 1','Elemento 2', 'Elemento 3']; //strign de tipo array
  constructor(){
    console.log('constructor lista');
  }
  ngOnInit(): void{}
}
