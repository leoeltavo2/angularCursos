import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public cards: Array<any> = [];

  constructor() { }
  

  ngOnInit(): void {
    
  
    this.cards = [
          // cursos de programacion
      {
        foto: "https://i.ytimg.com/vi/6741ceWzsKQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC2hKoMNc-YMuKrSQlIqMgnp7llaw",
        category:"programacion",
        alt:"curso angular desde cero",
        title:"Aprende ANGULAR Desde Cero 2021",
        descripcion:"Curso impartido por el profesor Leifer Mendez Curso de Angular 11 2021 y actualizado, este tutorial te servira para iniciar desde cero en el mundo de la programación.",
        link:"video",
      },
      {
        foto: "https://i.ytimg.com/vi/xnWtGNiG2lg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDBVzv9sAOaNz06GuSbybvB1ltRUQ",
        category:"programacion",
        alt:"curso javascript desde cero falconmasters",
        title:"Curso Básico de Javascript desde 0",
        descripcion:"Curso impartido por el profesor Carlos Arturo Esparza Veremos que es Javascript y lo que necesitamos para poder comenzar a programar en JS.",
      },
      {
        foto: "https://i.ytimg.com/vi/G2FCfQj-9ig/maxresdefault.jpg",
        category:"programacion",
        alt:"curso python pildorasinformaticas",
        title:"Curso de Python",
        descripcion:"Curso impartido por el profesor Juan Días En este curso se verán los fundamentos de Python, y la elaboración de proyectos más complejos.",
      },
      {
        foto: "https://i.ytimg.com/vi/L1oMLsiMusQ/maxresdefault.jpg",
        category:"programacion",
        alt:"curso java desde cero",
        title:"Curso de Programación JAVA Desde Cero",
        descripcion:"Curso impartido por el profesor Ernesto Curso dirigido que deseen aprender a programar, deseen concoer un nuevo lenguaje y ampliar suconocimiento.",
      },

      //  cursos de matemáticas
      {
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqEONVkAoZAOUIvCSN7ThVh5yDvkoNAWsSw&usqp=CAU",
        category:"matematicas",
        alt:"Curso gratis de matemáticas desde cero",
        title:"Curso Matemáticas Desde Cero",
        descripcion:"Curso impartido por el profesor Toxqui fundamentos hasta cosas avanzadas sobre matemáticas.",
      },
      {
        foto: "https://i.ytimg.com/vi/PILRVZhtol0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCS1IiQcFAvDNGuXIRdghzfRDe-iA",
        category:"matematicas",
        alt:"Curso extenso de matemáticas",
        title:"Curso Completo de Matemáticas",
        descripcion:"Curso impartido por el profesor @TuProfeTV donde se verán temás extensos de las matemáticas en todos los niveles.",
      },
      {
        foto: "https://i.ytimg.com/vi/LP6G8FJHMh4/maxresdefault.jpg",
        category:"matematicas",
        alt:"Curso de cálculo",
        title:"Curso de Cálculo",
        descripcion:"Curso impartido por el profesor Sergio Llanos donde se explican conceptos del cálculo.",
      },

      // cursos administración
      {
        foto: "https://i.ytimg.com/vi/sHflpcpaa8A/hqdefault.jpg",
        category:"administracion",
        alt:"Curso de administración para micro y pymes",
        title:"Curso de Administración de Empresas",
        descripcion:"Curso impartido por el profesor Moises Arce Este curso va dirigido a explicar conceptos sobre la administración de empresas.",
      },
      {
        foto: "https://i.ytimg.com/vi/QJQ4gBBYH6Y/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDSVRzrVEUlaGahmOZkEH2CMiH6JQ",
        category:"administracion",
        alt:"Curso de administración de empresas",
        title:"Curso Sobre la Administración de Empresas",
        descripcion:"Curso impartido por el profesor Robert Vargas donde se explicarán conceptos sobre la administración dirigido a las empresas.",
      },
      {
        foto: "https://i.ytimg.com/vi/luIweQmHq94/maxresdefault.jpg",
        category:"administracion",
        alt:"Curso de administración de empresas",
        title:"Curso Básico de Contabilidad",
        descripcion:"Curso impartido por Academia JAF Curso donde sobre explican conceptos básicos de la contabilidad funanciera.",
      },
      {
        foto: "https://i.ytimg.com/vi/rqpjFPRxjUY/maxresdefault.jpg",
        category:"administracion",
        alt:"Curso contabilidad básica",
        title:"Curso de Contabilidad Básica para Principiantes",
        descripcion:"Curso impartido por Contador Contado. A través de este curso de contabilidad aprenderás los conceptos básicos de excel. Aprenderás a leer un balance general, un estado de resultados. También aprenderás a realizar asientos contables, cuentas de mayor o las famosas cuentas T. Sabrás cómo se arma una balanza de comprobación y finalmente a generar informes financieros.",
      },

        //cursos biologia
      {
        foto: "https://i.ytimg.com/vi/EifOux1Zdj0/hqdefault.jpg",
        category:"biologia",
        alt:"Curso biología",
        title:"Clases de Biología",
        descripcion:"Curso impartido por la profesora Marcela Araya donde se conocerán conceptos básicos y avanzados sobre la biología.",
      },
      {
        foto: "https://i.ytimg.com/vi/cLeREsUH1VI/maxresdefault.jpg",
        category:"biologia",
        alt:"Introducción biología",
        title:"Curso de Biología",
        descripcion:"Curso impartido por el profesor Roger García donde se explicará temas variados de la biología.",
      },
     
    //  cursos de quimica
      {
        foto: "https://1.bp.blogspot.com/-VbSWghvAe0U/X489qUr_eDI/AAAAAAAAMZE/SLXo-S8K3a8inwDQBHnM888_9qR9KW3ngCLcBGAsYHQ/s950/curso-qu%25C3%25ADmica-gratis.jpg",
        category:"quimica",
        alt:"Curso química gratis online",
        title:"Curso de Química UNAM",
        descripcion:"Curso impartido por el profesor Alan J. Santoyo López en el que aprenderas química desde cero",
      },
      {
        foto: "https://i.ytimg.com/vi/DHTX8aoY1q0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDzNaVbfcozjtoKtjrhgYDEew4kbw",
        category:"quimica",
        alt:"Curso química fácil online",
        title:"Curso Completo de Química General",
        descripcion:"Curso impartido por Tarefa donde aprenderás conceptos básicos de la química general.",
      },



    ]

    // PROPIEDADES JQUERY
    $('.category-item[category="todos"]').addClass('activo');

    $('.category-item').click(function () {
      var catProduct = $(this).attr('category');
      // console.log(catProduct);
      $('.category-item').removeClass('activo');
      $(this).addClass('activo');


      $('.product-item').css('transform', 'scale(0)');
      function hideProduct() {
        $('.product-item').hide();
      }setTimeout(hideProduct,400);

      function showProduct() {
        $('.product-item[category="' + catProduct + '"]').show();
        $('.product-item[category="' + catProduct + '"]').css('transform','scale(1)');
      }setTimeout(showProduct,400);

    });

    $('.category-item[category="todos"]').click(function () {
      function showAll() {
        $('.product-item').show();
        $('.product-item').css('transform','scale(1)');
      }setTimeout(showAll,400);
    });

  
  }

}
