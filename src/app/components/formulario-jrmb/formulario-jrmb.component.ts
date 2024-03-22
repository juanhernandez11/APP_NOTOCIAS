import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrmb-formulario-jrmb',
  templateUrl: './formulario-jrmb.component.html',
  styleUrls: ['./formulario-jrmb.component.css']
})
export class FormularioJrmbComponent implements OnInit {

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'mx';

  categorias: any[] = [
    { value: 'general', nombre: 'General'},
    { value: 'businnes', nombre: 'Negocios'},
    { value: 'entertaiment', nombre: 'Entretenimiento'},
    { value: 'health', nombre: 'Salud'},
    { value: 'science', nombre: 'Ciencia'},
    { value: 'sports', nombre: 'Deportes'},
    { value: 'tecnology', nombre: 'Tecnologia'},
  ];

  paises: any[] = [
    { value: 'mx', nombre: 'Mexico'},
    { value: 'ar', nombre: 'Argentina'},
    { value: 'br', nombre: 'Brasil'},
    { value: 'fr', nombre: 'Francia'},
    { value: 'hu', nombre: 'Hungría'},
    { value: 'gb', nombre: 'Reino Unido'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado);
  }

}
