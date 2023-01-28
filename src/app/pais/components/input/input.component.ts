import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent implements OnInit{
  debouncer:Subject<string> = new Subject;
  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=>{
      this.onDebounce.emit(valor)
    })
  }
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string>= new EventEmitter();
  @Input() placeholder:string = '';

  termino: string = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }
  keyPressed(){
    this.debouncer.next(this.termino)
  }
}
