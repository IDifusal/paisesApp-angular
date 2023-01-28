import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/Paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private actualRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  pais!: Country;
  ngOnInit(): void {
    this.actualRoute.params.subscribe(({ country }) => {
      console.log(country);
      this.paisService.getPaisUnico(country).subscribe((pais) => {
        this.pais=pais[0];
        console.log(pais);
      });
    });
  }
}
