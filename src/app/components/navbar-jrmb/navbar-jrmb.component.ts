import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jrmb-navbar-jrmb',
  templateUrl: './navbar-jrmb.component.html',
  styleUrls: ['./navbar-jrmb.component.css']
})
export class NavbarJrmbComponent implements OnInit {
  @Input() titulo: string;

  constructor() { 
    this.titulo = ';'
  }

  ngOnInit(): void {
  }

}
