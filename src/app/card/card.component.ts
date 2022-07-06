import { Component, Input, OnInit } from '@angular/core';
import { ServicioFavoritosService } from '../services/servicio-favoritos.service';
declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string;
  @Input() dataEntrante:any;
  constructor(private servicioFavoritos:ServicioFavoritosService) { }

  ngOnInit(): void {
    this.image = '';

   

  }

  agregarFavorito(){
    //console.log(this.dataEntrante);
    this.servicioFavoritos.disparadorFavoritos.emit({
      data:this.dataEntrante
    })

  }

}
