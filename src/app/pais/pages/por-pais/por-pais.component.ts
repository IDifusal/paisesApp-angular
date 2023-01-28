import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  constructor(private paisService: PaisService) {}

  termino: string = '';
  error : boolean = false;
  paises: Country[] = [];
  buscar(termino:string) {
    this.termino= termino
    this.error = false
    this.paisService
      .buscarPais(this.termino)
      .subscribe((resp) => {this.paises = resp},(error)=>{this.error = true,this.paises=[]});
  }
  sugerencias(termino:string){
    this.error= false
    //TODO:CREAR SUGERENCIAS
  }
}
