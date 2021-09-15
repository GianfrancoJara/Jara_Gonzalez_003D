import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
      icon: 'game-controller-outline',
      name: 'Contenido',
      redirecTo: '/contenido'
    },
    {
      icon: 'document-text-outline',
      name: 'Formulario',
      redirecTo: '/formulario'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
