import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrl: './celda.component.sass'
})
export class CeldaComponent {
  @Input() palabra!: string
  @Input() letra!: string
  opcion: string=""
  css: string = ""

  verificar(){

    if(this.opcion === this.letra){
      this.css="Acierto";
      }
      else if(this.opcion.trim() !== "" && this.palabra.includes(this.opcion)){
        this.css="present";
        }
        else if (this.opcion.trim() !== "") {
          this.css = "Ausente";
          }

  }
}
