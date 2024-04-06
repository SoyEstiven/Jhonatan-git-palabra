import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrl: './celda.component.sass'
})
export class CeldaComponent {
  @Input() palabra!: string
  @Input() letra!: string
  @Input() celdas!: any []
  opcion: string=""
  css: string = ""

  verificar(){
  if(!this.opcion){
      this.css="";
      return;
      }

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
siguiente(event: any) {
  const target = event.target as HTMLInputElement;
  if (target.value.length === 1) {
    const inputs = document.querySelectorAll('input');
    const index = Array.from(inputs).indexOf(target);
    if (index < inputs.length - 1) {
      (inputs[index + 1] as HTMLInputElement).focus();
    }
  }
}


}
