import { Injectable, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritosService {
  @Output() disparadorFavoritos: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
