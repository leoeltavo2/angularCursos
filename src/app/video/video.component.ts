import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
 
  public video: Array<any> = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.video=[{
      titulo:"¿Como instalar angular en windows 10? rápidamente en 5 minutos",
      video:"6741ceWzsKQ",
    },
    {
      titulo:"Creando APLICACION en ANGULAR en 5 minutos desde cero",
      video:"ed06mt4YuEk",
    },
    {
      titulo:"EXTENSIONES de VISUAL STUDIO CODE para Desarrollo Web Angular",
      video:"bqrQ7b9s8tw",
    },
    {
      titulo:"Cómo CREAR un COMPONENTE en Angular ¿Cómo GENERAR COMPONENTES en Angular?",
      video:"cOCMwhDzlKI",
    },
    {
      titulo:"Cómo PASAR datos entre COMPONENTES? Cómo pasar datos de un componente a otro",
      video:"TbeqPSQ8Jxw",
    },

    {
      titulo:"¿Cómo PASAR (emitir) DATOS entre COMPONENTE A OTRO EN ANGULAR con SERVICIO?",
      video:"HTivuXwS2-Y",
    },
    {
      titulo:"Ejemplo de GET HTTP angular con JSON",
      video:"WtPY-JHczPM",
    },
    {
      titulo:"¿Cómo CREAR RUTAS (ROUTING) en ANGULAR11 ? Creando rutas en angular 11",
      video:"HtRZDWaAgRw",
    },
    {
      titulo:"¿ANGULAR HTTP POST peticiones con parámetros ejemplo? HttpClient | Obtener JSON",
      video:"_uVlaTsqV9U",
    },
    {
      titulo:"Data Table angular material ¿Cómo usar angular material data table?",
      video:"SkU-DEF2uGY",
    },
    {
      titulo:"PARTE #1 ¿Cómo crear FORMULARIOS REACTIVOS en Angular?",
      video:"x5E9CQh9w_U",
    },
    {
      titulo:"Angular FORMULARIOS REACTIVOS Como validar validación Dinámica mostrar mensajes de error",
      video:"6opef2o54Aw",
    },
    {
      titulo:"PROTEGIENDO RUTAS en Angular 11 (GUARDS) ¿Cómo proteger rutas en angular 11?",
      video:"Q3Hj9ItAdUM",
    },
    {
      titulo:"Generar (pipe) de Angular FILTROS Tutorial en ANGULAR 11? en minutos",
      video:"U-bgl1j1P_4",
    },
    {
      titulo:"¿Cómo generar DIRECTIVAS (DIRECTIVE) Tutorial en ANGULAR 11? en minutos",
      video:"2N-G0ACbAWc",
    },
    {
      titulo:"¿Cómo SUBIR IMAGEN (ARCHIVO) Tutorial en ANGULAR 11?",
      video:"8GJgfk1rFUQ",
    },
    {
      titulo:"COMPILAR y DESPLEGAR en SERVIDOR COMPARTIDO (cPanel, Plesk) una aplicación en ANGULAR? NGINX",
      video:"nP7VZgTokn0",
    },
    {
      titulo:"COMPILAR y desplegar en SERVIDOR COMPARTIDO (cPanel, Plesk) aplicación en ANGULAR? APACHE",
      video:"D0cnAQbByck",
    },
    
    {
      titulo:"¿Qué es una aplicación web progresiva PWA? ¿Cómo hacer aplicaciones web móviles? Curso PWA1",
      video:"wz4Nlr0Sm6U",
    },
    
    {
      titulo:"INSTALA web como app nativa 😎 ¿Cómo instalar una PWA de Angular? Curso Angular PWA",
      video:"p9uyTrvgNEE",
    },
    
    {
      titulo:"PWA modo offline (cache) con Service Worker en Angular 2021",
      video:"iXbnPhEqN5E",
    },
    
    {
      titulo:"Como ENVIAR notificaciones push en web PWA con ANGULAR",
      video:"HHoBON4tjU8",
    },
    
    {
      titulo:"Cache POST en Angular, Modo OFFLINE en PWA progresive web app",
      video:"kb_aMjEn4l0",
    },
    {
      titulo:"Mejorar SEO angular con Angular Universal implementando Angular SSR, JavaSctipt SEO",
      video:"TKP3TebD8TE",
    },
    {
      titulo:"Pre-render Mejorar SEO angular con Angular Universal implementando Angular SSR, JavaSctipt SEO",
      video:"KwN7m-XA8lY",
    },
    {
      titulo:"Angular manipulación de elementos DOM HTML | @ViewChild | Renderer2",
      video:"m7XPoQ-RikI",
    },
    {
      titulo:"(Angular Roles) ⮕ Permisos de Usuario y Componentes Elementos / Administrar roles usuarios",
      video:"6NKA6DWivWs",
    },
    {
      titulo:"Como PROTEGER RUTAS en Angular 11 (guards) / Configurando RUTAS / CanActivate Rutas Angular",
      video:"nox__spS6k4",
    },
    {
      titulo:"Angular ciclos de vida ¿Cómo funcionan 😡?⮕ ¿ngOnInit? ¿ngOnDestroy?",
      video:"oKEuL0eAoIU",
    },
    {
      titulo:"¿Cómo funcionan 😡? Angular ciclos de vida ⮕ ¿ngOnChanges ? ¿ngDoCheck ?",
      video:"755j4eew6JI",
    },

  ]
  }

  getVideoIframe(url) {
   
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url.video)   
}
}
