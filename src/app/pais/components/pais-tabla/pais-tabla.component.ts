import { Component,Input } from '@angular/core';
import { Country } from '../../interfaces/Paises.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: []
})
export class PaisTablaComponent  {

  @Input() paises!: Country[];
}
