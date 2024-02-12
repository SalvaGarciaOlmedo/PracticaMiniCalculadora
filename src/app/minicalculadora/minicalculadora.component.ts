import { Component } from '@angular/core';

@Component({
  selector: 'app-minicalculadora',
  templateUrl: './minicalculadora.component.html',
  styleUrl: './minicalculadora.component.css'
})
export class MinicalculadoraComponent {
  public primerNumero:number = 0;
  public segundoNumero:number = 0;
  public resultado:number = 0;
 
  restar(){
    this.resultado = this.primerNumero - this.segundoNumero
    return this.resultado
  }
  sumar(){
    this.resultado = this.primerNumero + this.segundoNumero;
    return this.resultado
  }
}
