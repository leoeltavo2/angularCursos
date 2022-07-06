import { Component, Input, OnInit } from '@angular/core';
import { ServicioFavoritosService } from '../services/servicio-favoritos.service';

declare var $: any;

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  // @Input() data:any;
  // public data: Array<any> = [];
  //public obj = {a: "a", b: "b" /*...*/};
  //public string = JSON.stringify(this.obj.a);
  // public dataString:any
  constructor(private servicioFavoritos: ServicioFavoritosService) { }
  public listaFavoritos:Array<any> = []

  ngOnInit(): void {
    this.servicioFavoritos.disparadorFavoritos.subscribe(data => {
      // console.log('Recibiendo data... ',data);
      
      // this.dataString = JSON.stringify(this.data);
      console.log(data?.data?.foto);

      this.listaFavoritos.push(data);
    });
  }
  
}
