                                                       
// VARIALES PRINCIPALES PARA EL JUEGO DE TRIVIA // 


var temas = ["Actores", "Fantasía", "Horror", "Accion", "Animacion"]; 

var actores = ["Christian Bale","Superbad","Gladiador","Tom Hanks","Ben Stiller"];

var fantasia = ["Mortifagos","Galadriel","El Perla Negra"];

var horror = ["El Conjuro","Pazuzu","Valak","Poltergeist","Samara"];

var accion = ["Roja","Avengers Endgame","Esperanza","Mente"];

var animacion =["Frozen 2","Mortimer","Blanca Nieves y los 7 enanos","Remi"];

var anime=["Kurama","Indara","Nagato","Elric","Satoshi","Kinomoto","Josei","One Piece","Diane"]; 

// MENU PARA LOS MOBILES Y EL MENU DE HAMBURGUESA //

x = document.getElementById("menu-comprimido");



function hamburguesa() {

    if (x.style.display == "none") {
        
        x.style.display = "block";
        x.style.height = "230px";
      } else {
        x.style.display = "none";
      }
    
  
}


                                                    // ELECCION Y REPRODUCCION DE LA PELICULA PARA LA PAGINA STREAMING HTML//


let StreamThis = {  // SE CREA UN OBJETO VACIO CON LA INFORMACION QUE QUIERO MOSTAR DE LA PELICULA LUEGO USO ESTO PARA EL STREAMING.HTML
  titulo:"",
  genero:"",
  duracion:"",
  idioma:"",
  url: ""
}

function setId(id){// este metodo se usa con un event de tipo mouseover, cuando la persona elije la pelicula que quiere ver
  // el metodo toma el URL que esta guardado en el ALT , si la persona elije esa pelicula este metodo le pasa ese URL 
  // al metodo de abajo para que extraiga la informacion y convierta a JSON los datos para ser manipulados

  eleccionPelicula = id.attributes["class"].value; // aqui esta tomando el valor de la clase para luego poder quitarle el ALT o cualquier otra informacion que yo quiera del elemento
  
  tituloPelicula = id.attributes["titulo"].value;
  generoPelicula = id.attributes["genero"].value;
  duracionPelicula = id.attributes["duracion"].value;
  idiomaPelicula = id.attributes["idioma"].value;
  sinopsisPelicula = id.attributes["sinopsis"].value;
  urlPelicula = id.attributes["alt"].value;// aqui le esta diciendo que le de el VALUE de alt (donde se me ocurrio meter el URL robado )

}



function recoleccionDeDatos(){// SE CREA UNA FUNCION QUE ES LA QUE ESTA LLAMADA EN EL BOTON AL HACER CLICK DEL CATALOGO DE PELICULAS
  
  



   StreamThis = {   // aqui estoy declarando un nuevo objeto de STREAMTHIS que va a contener la informaiocn de la pelicula que haya elegido el usuario, esto lo agarre del metodo anterior 
                   // que se llama SetID(id) se puede tomar mas cosas como el nombre , la sinopsis de la pelicula en que idioma esta etc lo que se quiera.
    titulo:tituloPelicula,
    genero:generoPelicula,
    duracion:duracionPelicula,
    idioma:idiomaPelicula,
    sinopsis: sinopsisPelicula,
    url: urlPelicula
  }


  localStorage.setItem("StreamThis", JSON.stringify(StreamThis)); // ESTA LINEA ES UTILIZADA CON JSON PARA CONVERTIR TODO ESE OBJETO EN UN STRING, ESTO PARA ALMACENARLO
                                                                  // EN LOCALSTORAGE LUEGO, LA RAZON DE ESTO ES PORQUE QUIERO QUE GUARDE VARIOS DATOS DE LA PELICULA QUE 
                                                                  // HAYA ELEGIDO LA PERSONA SIN QUE TENGA QUE ESTAR CREANDO TANTA VARIABLE



  document.location.href = "Streaming.html";// esta linea redirije al usuario a la pagina que cree que se llama STREAMING.HTML una vez que recogio toda la info




}



let streamThisTitulo = JSON.parse( localStorage.getItem("StreamThis") ).titulo; // la variable PROYECTOR va a ser un JSON convertido en objeto string (del objeto StreamThat se extrae esto )
                                                                      // el .URL es paraque solo le pase el URL para cargar el video en STREAMING.HTML
let streamThisGenero = JSON.parse( localStorage.getItem("StreamThis") ).genero; // la variable PROYECTOR va a ser un JSON convertido en objeto string (del objeto StreamThat se extrae esto )
                                                                      // el .URL es paraque solo le pase el URL para cargar el video en STREAMING.HTML

let streamThisDuracion = JSON.parse( localStorage.getItem("StreamThis") ).duracion; // la variable PROYECTOR va a ser un JSON convertido en objeto string (del objeto StreamThat se extrae esto )
                                                                      // el .URL es paraque solo le pase el URL para cargar el video en STREAMING.HTML

let streamThisIdioma = JSON.parse( localStorage.getItem("StreamThis") ).idioma; // la variable PROYECTOR va a ser un JSON convertido en objeto string (del objeto StreamThat se extrae esto )
                                                                      // el .URL es paraque solo le pase el URL para cargar el video en STREAMING.HTML

let streamThisSinopsis = JSON.parse( localStorage.getItem("StreamThis") ).sinopsis; // la variable PROYECTOR va a ser un JSON convertido en objeto string (del objeto StreamThat se extrae esto )
                                                                                // el .URL es paraque solo le pase el URL para cargar el video en STREAMING.HTML

let StreamThisUrl = JSON.parse( localStorage.getItem("StreamThis") ).url; // la variable PROYECTOR va a ser un JSON convertido en objeto string (del objeto StreamThat se extrae esto )
                                                                      // el .URL es paraque solo le pase el URL para cargar el video en STREAMING.HTML







proyectandoTitulo = document.getElementById("tituloPeliculaSerie");
proyectandoTitulo.textContent = streamThisTitulo;// aqui le estoy diciendo que vaya a proyectando (el div que esta en STREAMING.HTML) y 
                              // le meta en la propiedad SRC el valor de PROYECTOR (el url del video)
                            // eso hace que se cargue la pelicula que el usuario haya elegido


proyectandoGenero = document.getElementById("generoPeliculaSerie");
proyectandoGenero.textContent = streamThisGenero;// aqui le estoy diciendo que vaya a proyectando (el div que esta en STREAMING.HTML) y 
                              // le meta en la propiedad SRC el valor de PROYECTOR (el url del video)
                            // eso hace que se cargue la pelicula que el usuario haya elegido


proyectandoDuracion = document.getElementById("duracionPeliculaSerie");
proyectandoDuracion.textContent = streamThisDuracion;// aqui le estoy diciendo que vaya a proyectando (el div que esta en STREAMING.HTML) y 
                              // le meta en la propiedad SRC el valor de PROYECTOR (el url del video)
                            // eso hace que se cargue la pelicula que el usuario haya elegido


proyectandoIdioma = document.getElementById("idiomaPeliculaSerie");
proyectandoIdioma.textContent = streamThisIdioma;// aqui le estoy diciendo que vaya a proyectando (el div que esta en STREAMING.HTML) y 
                              // le meta en la propiedad SRC el valor de PROYECTOR (el url del video)
                            // eso hace que se cargue la pelicula que el usuario haya elegido

proyectandoSinopsis = document.getElementById("sinopsisPeliculaSerie");
proyectandoSinopsis.textContent = streamThisSinopsis;// aqui le estoy diciendo que vaya a proyectando (el div que esta en STREAMING.HTML) y 
                              // le meta en la propiedad SRC el valor de PROYECTOR (el url del video)
                            // eso hace que se cargue la pelicula que el usuario haya elegido



proyectandoUrl = document.getElementById("proyectando");
proyectandoUrl.src = StreamThisUrl;// aqui le estoy diciendo que vaya a proyectando (el div que esta en STREAMING.HTML) y 
                              // le meta en la propiedad SRC el valor de PROYECTOR (el url del video)
                            // eso hace que se cargue la pelicula que el usuario haya elegido



  
  




                                                 
                                                 
                                                 
                                                 
                                                                      // JUEGO DE TRIVIA PARA LA PAGINA //









               


// Variables Principales // 

var eleccionRandom = 0;
var eleccion = "";
var juega= ""; 
var  segundos = 60;
var cortaEleccion;
var cortaEleccionRandom;
var inyectaRandom;
var eleccionPerdio ="";
var colorElegido = "";


// Metodos de Botones /// 


// GO --> Llama a comprobar si lo que el usuario ingreso al darle OK es la respuesta correcta
function GO(){
    
    juega = document.getElementById("respuesta").value;
 
    if (juega.toLowerCase() == eleccion.toLowerCase() & juega != ""){
        solucion = ""; // elemento vacio para tirar la respuesta antes que limpiar se corra y la elimine de la memoria 
        solucion = eleccion;
        
        

        limpiar(); 
        clearInterval(cuenta);//detiene el tiempo si contesto correctamente
        
        sonidoSuccess();
        
        setTimeout(aparecer,90); 

        document.getElementById("pista").style.opacity = "0.0"; // primero le quito el opacity solo por un momento
        
        function aparecer() { 
          ganador = "CORRECTO";

          for (x in ganador){  
            document.getElementById("pista").innerHTML = ganador// recorro la palabra
            document.getElementById("pista").style.fontSize = 350 + "%";// IMPORTANTE sino lo pone asi # + % no funciona
            document.getElementById("pista").style.opacity = "2"; // primero le quito el opacity solo por un momento
            
            
            
         }
        }



        document.getElementById("enigma").innerHTML
        document.getElementById("incorrecto").style.display = "none";

        for (x=0; x < solucion.length; x++){// ahora el for recorre la respuesta correcta para tirarla en pantalla
    
            casilla = document.createElement("p");// variable que va crear una p en el HTML 
            casilla.innerHTML = solucion[x];// a esa p le va a meter un innerHTML con lo que vale la x sea 1 2 3 lo que sea y le metemos ese valor como cortaEeleccionRandom[x] para obenter una letra o un espacio vacio
            
        
            if (solucion[x].includes(" ") ){// si el ...Random[x] vale un espacio vacio le pido que me cambie los estilos a transparente y a border none asi solo salen las letras 
        
                document.getElementById("enigma").appendChild(casilla).style.background = "transparent";
                document.getElementById("enigma").appendChild(casilla).style.border = "none";
                
                
                }else{
                    document.getElementById("enigma").appendChild(casilla);// sino le pido que solo meta la letra que encontro ue se que no es un espacio vacio, el SASS se encarga de darle estilos 
                    
           } 
                    
        }
    }else if(eleccion == "" ){// en caso que le den go sin poner nada desde el inicio 
        document.getElementById("pista").innerHTML = " Elije una categoria para comenzar a jugar " 
    }else{
        document.getElementById("fallos").style.display = "flex";
        document.getElementById("incorrecto").style.display = "flex";
        document.getElementById("incorrecto").style.opacity ="1";
        document.getElementById("incorrecto").style.transition ="ease-in-out 1s";
            
             
        

        setTimeout(desaparece,2000); /// esto trabaja con la funcion de abaja para en un lapso de 2segundos
        //hacer lo que diga la funcion en este caso que tenga un ease out in y un opacity de 0.0
          
        

        function desaparece(){/// funcion que hace que desaparezca la linea de error despues de un rato
            //document.getElementById("incorrecto").style.display = "none";
            document.getElementById("incorrecto").style.transition ="ease-in-out 1s";
            document.getElementById("incorrecto").style.opacity ="0";
           

        }

        

        document.getElementById("lista").style.display = "block";
        document.getElementById("respuesta").value = "";

        intentoFallido = document.createElement("p");
        intentoFallido.innerHTML = juega;
        document.getElementById("fallos").appendChild(intentoFallido)
        
        
    }//fin del else 

    



}// fin function GO


// SELECTORES DE TEMAS //
 

function eligiendoTema1(){// se corre al hacer click en un tema para elegir de las listas, pasa una variable para eleccion random de tema 
     segundos = 60; 
    
    document.getElementById("contenedor").style.border = "solid 1px #ee0000";
    document.getElementById("enigma").style.border = "solid 1px #ee0000";
    colorElegido = "#ee0000";
    
        
    timer(colorElegido);
    limpiar(); 

    
    
    
    eleccionRandom = Math.floor(Math.random() * actores.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = actores[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE

    // PISTAS // 

    switch (eleccion){
        case "Christian Bale" :
            pistasChristian_Bale =["Nombre del actor que protagonizó a Batman en Batman Begins"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasChristian_Bale.length); // numero random del arreglo pistas
            pista = pistasChristian_Bale[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Superbad" :
            pistasSuperbad =["Nombre de la película donde debuto Emma Stone"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasSuperbad.length); // numero random del arreglo pistas
            pista = pistasSuperbad[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Gladiador" :
            pistasGladiador =["¿Con cuál película le dieron la primera nominación al Oscar a Joaquin Phoenix?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasGladiador.length); // numero random del arreglo pistas
            pista = pistasGladiador[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Tom Hanks" :
            pistasTom_Hanks =["Este actor  nunca ha interpretado un villano"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasTom_Hanks.length); // numero random del arreglo pistas
            pista = pistasTom_Hanks[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Ben Stiller" :
            pistasBen_Stiller =["Este actor tuvo que asistir a terapia a base de hipnosis para tratar su adicción a los chocolates M&M's, ya que al día consumía casi medio kilo."];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasBen_Stiller.length); // numero random del arreglo pistas
            pista = pistasBen_Stiller[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        

              

    }

        
    
     
    generandoRandom(eleccion); // llamando al metodo para dividir la palabra y mostarla en pantalla

    
   

    
} 


function eligiendoTema2(){// se corre al hacer click en un tema para elegir de las listas, pasa una variable para eleccion random de tema 
     segundos = 60; 
    
    document.getElementById("contenedor").style.border = "solid 1px #24b24e";
    document.getElementById("enigma").style.border = "solid 1px #24b24e";
    colorElegido = "#24b24e"
    
    timer(colorElegido);
    limpiar();
    
    eleccionRandom = Math.floor(Math.random() * fantasia.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = fantasia[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE
        
        // PISTAS // 

        switch (eleccion){
            case "Mortifagos" :
                pistasMortifagos =["Nombre que recibían los aliados a Lord Voldemort "];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasMortifagos.length); // numero random del arreglo pistas
                pista = pistasMortifagos[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;
            case "Galadriel" :
                pistasGaladriel =['¿Quién le dice a Frodo: "Hasta el más pequeño puede cambiar el curso del futuro"?'];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasGaladriel.length); // numero random del arreglo pistas
                pista = pistasGaladriel[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;

            case "El Perla Negra" :
                pistasElPerlaNegra =["¿Como se llama el barco de jack sparrow en piratas del caribe?"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasElPerlaNegra.length); // numero random del arreglo pistas
                pista = pistasElPerlaNegra[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;

         
        
        }






     
    generandoRandom(eleccion); 


    
} 

function eligiendoTema3(){// se corre al hacer click en un tema para elegir de las listas, pasa una variable para eleccion random de tema 
     segundos = 60; 
    
    document.getElementById("contenedor").style.border = "solid 1px #009ce7";
    document.getElementById("enigma").style.border = "solid 1px #009ce7";
    colorElegido = "#009ce7"
    
    timer(colorElegido);
    limpiar();
   
    eleccionRandom = Math.floor(Math.random() * horror.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = horror[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE
        
     // PISTAS // 

     switch (eleccion){
        case "El Conjuro" :
            pistasEl_Conjuro =["Es la película que está catalogada como la más terrorífica del siglo XXI"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasEl_Conjuro.length); // numero random del arreglo pistas
            pista = pistasEl_Conjuro[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;


            case "Pazuzu" :
            pistasPazuzu =['¿Cómo se llama el demonio que ataca a Regan en el exorcista?'];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasPazuzu.length); // numero random del arreglo pistas
            pista = pistasPazuzu[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;


            case "Valak" :
            pistasValak =["¿Cómo se llama el demonio que tomó la forma de una monja?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasValak.length); // numero random del arreglo pistas
            pista = pistasValak[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break; 


            case "Poltergeist" :
            pistasPoltergeist =["Se dice que esta pelicula estaba maldita después de una serie de accidentes y tragedias en las que se vieron implicados actores en varias películas"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasPoltergeist.length); // numero random del arreglo pistas
            pista = pistasPoltergeist[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;



            case "Samara" :
            pistasSamara =["¿Cómo se llama la niña del Aro?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasSamara.length); // numero random del arreglo pistas
            pista = pistasSamara[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;



            
    
    }
     
    generandoRandom(eleccion); 


    
} 

function eligiendoTema4(){// se corre al hacer click en un tema para elegir de las listas, pasa una variable para eleccion random de tema 
     segundos = 60; 
    
    document.getElementById("contenedor").style.border = "solid 1px #ff7f00";
    document.getElementById("enigma").style.border = "solid 1px #ff7f00";
    colorElegido = "#ff7f00"

    timer(colorElegido);
    limpiar(); 
    
    
    eleccionRandom = Math.floor(Math.random() * accion.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = accion[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE
        
    switch (eleccion){
        case "Roja" :
            pistasRoja =['En "The Matrix" ¿Cual es el color de la pastilla que toma Neo ?'];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasRoja.length); // numero random del arreglo pistas
            pista = pistasRoja[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
            case "Avengers Endgame" :
                pistasCarebarro =["¿Cuál ha sido la película más taquillera en la historia?"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasCarebarro.length); // numero random del arreglo pistas
                pista = pistasCarebarro[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;
                case "Esperanza" :
                    pistasEsperanza =["¿Qué significa, para Superman, la S de su pecho?"];// arreglo con pistas
                    pistaRandom = Math.floor(Math.random() * pistasEsperanza.length); // numero random del arreglo pistas
                    pista = pistasEsperanza[pistaRandom];
                    document.getElementById("pista").innerHTML  = pista;
                    break;
                    case "Chunche" :
                         pistasJared_Leto =["¿Cómo se llama el actor que interpretó al Jóker en Escuadrón Suicida?"];// arreglo con pistas
                        pistaRandom = Math.floor(Math.random() *  pistasJared_Leto.length); // numero random del arreglo pistas
                        pista =  pistasJared_Leto[pistaRandom];
                        document.getElementById("pista").innerHTML  = pista;
                        break;
                        case "Mente" :
                            pistasLa_Mente =["¿Qué gema porta Visión en su frente?"];// arreglo con pistas
                            pistaRandom = Math.floor(Math.random() * pistasLa_Mente.length); // numero random del arreglo pistas
                            pista = pistasLa_Mente[pistaRandom];
                            document.getElementById("pista").innerHTML  = pista;
                            break;
                         
    }
     
    generandoRandom(eleccion); 


    
} 




function eligiendoTema6(){// se corre al hacer click en un tema para elegir de las listas, pasa una variable para eleccion random de tema 
     segundos = 60; 
    
    document.getElementById("contenedor").style.border = "solid 1px #0bf1f7";
    document.getElementById("enigma").style.border = "solid 1px #0bf1f7";
    colorElegido = "#0bf1f7"
    
    
    timer(colorElegido);
    limpiar();
    
    
    
    eleccionRandom = Math.floor(Math.random() * animacion.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = animacion[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE

    // PISTAS // 

    switch (eleccion){
        case "Frozen 2" :
            pistasFrozen_2 =["¿Cuál es la película animada más taquillera?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasFrozen_2.length); // numero random del arreglo pistas
            pista = pistasFrozen_2[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Mortimer" :
            pistasMortimer =["¿Cuál iba a ser el nombre de Mickey Mouse?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasMortimer.length); // numero random del arreglo pistas
            pista = pistasMortimer[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Blanca Nieves y los 7 enanos" :
            pistasBlancaNievesYlosSieteEnanos =["¿Cuál es el primer largometraje de Disney?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasBlancaNievesYlosSieteEnanos.length); // numero random del arreglo pistas
            pista = pistasBlancaNievesYlosSieteEnanos[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Remi" :
            pistasRemi =["Nombre del ratón azul en la película Rata touille"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasRemi.length); // numero random del arreglo pistas
            pista = pistasRemi[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
            
        
    }
   
     
    generandoRandom(eleccion); // llamando al metodo para dividir la palabra y mostarla en pantalla
   
} 


function eligiendoTema7(){// se corre al hacer click en un tema para elegir de las listas, pasa una variable para eleccion random de tema 
     segundos = 60; 
    timer();
    document.getElementById("contenedor").style.border = "solid 1px #ff01c2";
    document.getElementById("enigma").style.border = "solid 1px #ff01c2";
    colorElegido = "#ff01c2"
    
    limpiar();
    
    
    
    eleccionRandom = Math.floor(Math.random() * anime.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = anime[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE

    // PISTAS // 

    switch (eleccion){

        case "Diane" :
            pistasDiane =["Este personaje también se le conoce como Serpiente el pecado de la envidia"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasDiane.length); // numero random del arreglo pistas
            pista = pistasDiane[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;

        case "One Piece" :
            pistasOne_Piece =["Nombre del manga mas vendido en Japón"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasOne_Piece.length); // numero random del arreglo pistas
            pista = pistasOne_Piece[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;

        case "Josei" :
            pistasJosei =["Nombre que reciben los mangas dirigido hacia las las mujeres"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasJosei.length); // numero random del arreglo pistas
            pista = pistasJosei[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;

        
        case "Kinomoto" :
            pistasKinomoto =["Apellido de Saruka en Sakura Card Captors"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasKinomoto.length); // numero random del arreglo pistas
            pista = pistasKinomoto[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        


        case "Satoshi" :
            pistasSatoshi =["Nombre original de Ash Ketchum en Japones"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasSatoshi.length); // numero random del arreglo pistas
            pista = pistasSatoshi[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        
        
        
        case "Elric" :
            pistasElric =["Apellido de Edward y Al en Full Metal Alchemist"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasElric.length); // numero random del arreglo pistas
            pista = pistasElric[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Indara" :
            pistasIndara =["Nombre del ancestro original del clan Uchiha"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasIndara.length); // numero random del arreglo pistas
            pista = pistasIndara[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;    
            case "Nagato" :
            pistasNagato =["Nombre del asesino de Jiraya"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasNagato.length); // numero random del arreglo pistas
            pista = pistasNagato[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;             
      
            case "Kurama" :
            pistasKurama =["¿Nombre del zorro de 9 colas?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasKurama.length); // numero random del arreglo pistas
            pista = pistasKurama[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;             

    }   
     
    generandoRandom(eleccion); // llamando al metodo para dividir la palabra y mostarla en pantalla

       
} 



function generandoRandom(eleccion){   
    console.log("RESPUESTA ----> " + eleccion) ;

    cortaEleccion =  eleccion.split("");// OJO LAS COMILLAS NO SEPARADAS PARA QUE CADA LETRA SEA UN INDEX
    
    

    cortaEleccionRandom = cortaEleccion.sort(function(a, b){return 0.3521 - Math.random()}); // toma la seleccion
    //que tiene forma de arreglo y desordena las letras 
    



    //var inyectaRandom = Math.floor(Math.random() * cortaEleccionRandom.length)
    inyectaRandom = Math.floor(Math.random() * eleccion.length );
    for (x in eleccion){
        inyectaRandom = Math.floor(Math.random() * eleccion.length );
        
        cortaEleccionRandom.splice(inyectaRandom,0," "); // quiero que vayas a la posicion random y te muevas 3 casillas de ahi
    // luego quiero que no elimines nada y que insertes lo que valia cambio1 y cambio2 que era el valor que corte del original
        }//final del for


   

  


    for (x=0; x < cortaEleccionRandom.length; x++){// un for que empieza en 0 y que tiene que ser menor que el largo de cortaEleccionRandom , va creciendo en 1

    
    casilla = document.createElement("p");// variable que va crear una p en el HTML 
    casilla.innerHTML = cortaEleccionRandom[x];// a esa p le va a meter un innerHTML con lo que vale la x sea 1 2 3 lo que sea y le metemos ese valor como cortaEeleccionRandom[x] para obenter una letra o un espacio vacio
    

    if (cortaEleccionRandom[x].includes(" ") ){// si el ...Random[x] vale un espacio vacio le pido que me cambie los estilos a transparente y a border none asi solo salen las letras 

        document.getElementById("enigma").appendChild(casilla).style.background = "transparent";
        document.getElementById("enigma").appendChild(casilla).style.border = "none";
        
        
        
        
        }else{
            document.getElementById("enigma").appendChild(casilla);// sino le pido que solo meta la letra que encontro ue se que no es un espacio vacio, el SASS se encarga de darle estilos 
           
        } 

       


    
    
    

       


    console.log(casilla);

    

        }//final del for 


        



}//findel del function genrandoRandom()



function limpiar(casilla){
    eleccionRandom = 0;
    eleccion = "";
    repuesta = "";
    juega = "";
    document.getElementById("fallos").innerHTML = " ";

    sonidoMusica();
    
       

    document.getElementById("enigma").innerHTML = "";
    document.getElementById("pista").innerHTML = "";
    document.getElementById("respuesta").value = "";
    document.getElementById("pista").style.fontSize = 150 + "%";// IMPORTANTE sino lo pone asi # + % no funciona
    


}


/* SONIDOS */


function sonidoSeleccion(){
    var x = document.getElementById("sonidoSelector"); 
    x.play();
}

function sonidoSuccess(){
    audio.pause(); // detiene la musica que es la variable audio y le pone pausa para luego sonar el success
    var x = document.getElementById("sonidoSuccess"); 
    x.play();
} 

function sonido5(){  
   
   x = document.getElementById("sonido5");
   x.play();
}
function sonido4(){   
    var x = document.getElementById("sonido4");
    x.play();
   }
function sonido3(){   
var x = document.getElementById("sonido3");

x.play();
}
function sonido2(){   
var x = document.getElementById("sonido2");
x.play();
}
function sonido1(){   
var x = document.getElementById("sonido1");
x.play();
}
function sonido0(){   
    
var x = document.getElementById("sonido0");
x.play();


}



/// TIMER /// 
var cuenta ;     

function timer(){  
    
    clearInterval(cuenta);
    cuenta = setInterval(timer,1000);
    
   
     
    if (segundos >= 0){
     document.getElementById("timer").innerHTML =  segundos;
    
    }
    switch(segundos){
        case 5: 
            sonido5(); 
            document.getElementById("timer").style.boxShadow = " 0 0 5px" + colorElegido;        

            break 
        case 4: 
            sonido4(); 
            document.getElementById("timer").style.boxShadow = " 0 0 5px" + colorElegido + ",0 0 25px" + colorElegido;
            break 
        case 3: 
            sonido3();
            document.getElementById("timer").style.boxShadow = " 0 0 5px" + colorElegido + ",0 0 25px" + colorElegido + ",0 0 50px" + colorElegido;
            break 
        case 2: 
            sonido2();
            document.getElementById("timer").style.boxShadow = " 0 0 200px" + colorElegido + ",0 0 5px" + colorElegido + ",0 0 50px" + colorElegido + ",0 0 20px" + colorElegido;
            break 
        case 1: 
            sonido1();
            document.getElementById("timer").style.boxShadow = " 0 0 400px" + colorElegido + ",0 0 5px" + colorElegido + ",0 0 70px" + colorElegido + ",0 0 50px" + colorElegido;
            break 
        case 0: 
            sonido0();     
            document.getElementById("timer").style.boxShadow = " 0 0 200px" + colorElegido + ",0 0 500px" + colorElegido + ",0 0 50px" + colorElegido + ",0 0 400px" + colorElegido;     
            break   
        case -1:
            clearInterval(cuenta);
            document.getElementById("timer").style.boxShadow = "none";  
            
            eleccionPerdio = eleccion;   // antes que se borre lo que vale eleccion lo salvo en esta variable sino no tengo nda que mostrar en la pantalla 
            perdedor(eleccionPerdio);

    }

    segundos--


} 


// SONIDOS //
function sonidoMusica(){
   
audio = document.getElementById("menuMusica");
audio.currentTime = 0
audio.play();


} 

function mute(){
  if (audio.volume != 0){audio.volume = 0; document.getElementById("mute").style.background = "#d23030"}else{audio.volume = 1; document.getElementById("mute").style.background ="#30b0d2"}// si el usuario quiere apaga o enciende la musica con este metodo asociado al boton
    
}


function perdedor(eleccionPerdio){
       limpiar(); 

       clearInterval(cuenta);
        
        audio.pause();
        sonidoPerdedor = document.getElementById("sonidoFailure")
        sonidoPerdedor.play();


        document.getElementById("pista").innerHTML = " Se acabo el tiempo, la respuesta es :  "
        document.getElementById("pista").style.fontSize =350 + "%";// IMPORTANTE sino lo pone asi # + % no funciona
           
        for (x=0; x < eleccionPerdio.length; x++){// ahora el for recorre la respuesta correcta para tirarla en pantalla
        
        casilla = document.createElement("p");// variable que va crear una p en el HTML 
        casilla.innerHTML = eleccionPerdio[x];// a esa p le va a meter un innerHTML con lo que vale la x sea 1 2 3 lo que sea y le metemos ese valor como cortaEeleccionRandom[x] para obenter una letra o un espacio vacio
        
        
        if (eleccionPerdio[x].includes(" ") ){// si el ...Random[x] vale un espacio vacio le pido que me cambie los estilos a transparente y a border none asi solo salen las letras 
            
            document.getElementById("enigma").appendChild(casilla).style.background = "transparent";
            document.getElementById("enigma").appendChild(casilla).style.border = "none";
            
            
            }else{
                
                document.getElementById("enigma").appendChild(casilla);// sino le pido que solo meta la letra que encontro ue se que no es un espacio vacio, el SASS se encarga de darle estilos 
                
           } //fin de else
                
        }//fin de for
    
    
    
    
}


