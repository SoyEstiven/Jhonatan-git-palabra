import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.sass'
})
export class TableroComponent implements OnInit{
  palabra!: string
  palabras = [
    "rosas",
    "limon",
    "gatos",
    "flojo",
    "mesas",
    "fosas",
    "pilas",
    "rojas",
    "puros",
    "calvo",
    "luzca",
    "fuego",
    "muros",
    "copas",
    "manos",
    "feliz",
    "colas",
    "ficha",
    "grifo",
    "mimos",
    "bravo",
    "malva",
    "clavo",
    "limbo",
    "mitad",
    "nubes",
    "parva",
    "liras",
    "guapo",
    "casco",
    "curas",
    "bocas",
    "donas",
    "jefes",
    "rayas",
    "buzos",
    "jarra",
    "rejas",
    "sapos",
    "cubos",
    "salsa",
    "sogas",
    "ruido",
    "higos",
    "balas",
    "botas",
    "datos",
    "motos",
    "mapas",
    "flema",
    "lobos",
    "paris",
    "cajas",
    "tejas",
    "gotas",
    "pavas",
    "fleco",
    "fondo",
    "suelo",
    "palas",
    "alzar",
    "timar",
    "jugar",
    "verbo",
    "rozar",
    "girar",
    "casar",
    "parar",
    "calor",
    "besar",
    "donar",
    "botar",
    "lunar",
    "fumar"
  ]
  letras: any[]= []
  constructor(){

  }
  ngOnInit(): void {
    let random = 0
    do {
      random = Math.round(Math.random()*this.palabras.length)
    }while(!this.palabras[random])

    console.log(this.palabras[random])
    this.palabra = this.palabras[random]
    this.letras = this.palabras[random].split("")
    console.log(this.letras)

  }
  



}
