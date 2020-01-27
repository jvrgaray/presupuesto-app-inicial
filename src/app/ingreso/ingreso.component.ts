import { IngresoServicio } from './ingreso.service';
import { Ingreso } from './ingreso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private ingresoServicio: IngresoServicio) {
    this.ingresos = ingresoServicio.ingresos;
  }

  ngOnInit() {
  }

  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoServicio.eliminar(ingreso);
  }
}
