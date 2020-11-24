

var temas = ["Personajes", "Lugares", "Musica", "Frases"]; 

var personajesHistoricos = ["Francisco Franco","Julio Verne","Gengis Kan","Platon","Alejandro Magno","Watergate","Constantino","George Washington"];

var lugares = ["Tailandia","Mexico","Budapest","Dakota del Sur","Canada","Dinamarca","Holanda","Irlanda","Palaos","San Marino","Yellowstone"];

var musica = ["David Bisbal","The Beatles","Madona","Sandro","Juan Gabriel","Roberto Carlos"];

var CosasDeTicos = ["Pura Vida","Carebarro","Pura Paja","Chunche","Juega de Vivo","Tapis"];

var gamer =["Jumpman","Agua","Sam Fisher","John","Animus","Minecraft","Las Mariposas"];

var anime=["Taisho","Kurama","Indara","Nagato","Elric","Satoshi","Kinomoto","Josei","One Piece","Diane"]; 



// Variables Principales // 

var eleccionRandom = 0;
var eleccion = "";
var juega= ""; 
var segundos = 60;
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
    colorElegido = "#ee0000"
    
        
    timer(colorElegido);
    limpiar(); 

    
    
    
    eleccionRandom = Math.floor(Math.random() * personajesHistoricos.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = personajesHistoricos[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE

    // PISTAS // 

    switch (eleccion){
        case "Francisco Franco" :
            pistasFrancisco_Franco =["Creía haber sido elegido por Dios para llevar a cabo una cruzada y salvar España en 1936"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasFrancisco_Franco.length); // numero random del arreglo pistas
            pista = pistasFrancisco_Franco[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Julio Verne" :
            pistasJulio_Verne =["Escritor del libro 'Veinte mil leguas de viaje submarino'"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasJulio_Verne.length); // numero random del arreglo pistas
            pista = pistasJulio_Verne[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Gengis Kan" :
            pistasGengis_Kan =["Temido guerrero y conquistador mongol"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasGengis_Kan.length); // numero random del arreglo pistas
            pista = pistasGengis_Kan[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Platon" :
            pistasPlaton =["Filosofo griego seguidor de Socrates y maestro de Aristoteles"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasPlaton.length); // numero random del arreglo pistas
            pista = pistasPlaton[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Alejandro Magno" :
            pistasAlejandro_Magno =["Conquistador de Macedonia que recibio educacion directa de Aristoteles"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasAlejandro_Magno.length); // numero random del arreglo pistas
            pista = pistasAlejandro_Magno[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Watergate" :
            pistasWatergate =["¿Con qué nombre se conoce el escándalo que obligó al presidente estadounidense Richard Nixon a renunciar?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasWatergate.length); // numero random del arreglo pistas
            pista = pistasWatergate[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;

            case "Constantino" :
            pistasConstantino =["¿Qué emperador romano legalizó el cristianismo y puso fin a la persecución de los cristianos?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasConstantino.length); // numero random del arreglo pistas
            pista = pistasConstantino[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;

            case "George Washington" :
            pistasGeorge_Washington =["¿Quién fue el primer Presidente de Estados Unidos?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasGeorge_Washington.length); // numero random del arreglo pistas
            pista = pistasGeorge_Washington[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;

            case "La batalla de Waterloo" :
            pistasLa_batalla_de_Waterloo =["¿Cuál es el nombre de la famosa batalla donde Napoleón Bonaparte fue derrotado?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasLa_batalla_de_Waterloo.length); // numero random del arreglo pistas
            pista = pistasLa_batalla_de_Waterloo[pistaRandom];
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
    
    eleccionRandom = Math.floor(Math.random() * lugares.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = lugares[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE
        
        // PISTAS // 

        switch (eleccion){
            case "Tailandia" :
                pistasTailandia =["¿En qué país se encuentra la escultura del Gran Buda Sakayamunee?"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasTailandia.length); // numero random del arreglo pistas
                pista = pistasTailandia[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;
            case "Mexico" :
                pistasMexico =["¿En qué país latinoamericano se encuentra Chichén Itzá?"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasMexico.length); // numero random del arreglo pistas
                pista = pistasMexico[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;

            case "Budapest" :
                pistasBudapest =["¿Dónde debes viajar para cruzar el Puente de las Cadenas?"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasBudapest.length); // numero random del arreglo pistas
                pista = pistasBudapest[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;

            case "Dakota del Sur" :
                pistasDakota_del_Sur =["¿En qué estado de Estados Unidos debemos viajar para ver el Monte Rushmore?"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasDakota_del_Sur.length); // numero random del arreglo pistas
                pista = pistasDakota_del_Sur[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;

            case "Canada" :
                pistasCanada =["Tiene más lagos que todos los países del mundo juntos"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasCanada.length); // numero random del arreglo pistas
                pista = pistasCanada[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;


                case "Dinamarca" :
                pistasDinamarca =["Tienen la bandera más vieja del mundo"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasDinamarca.length); // numero random del arreglo pistas
                pista = pistasDinamarca[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;


                case "Holanda" :
                pistasHolanda =["Una cuarta parte de su territorio pertenecía anteriormente al mar pero los hombres fueron ganando terreno hasta conseguir las dimensiones actuales"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasHolanda.length); // numero random del arreglo pistas
                pista = pistasHolanda[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break; 


                case "India" :
                pistasIndia =["En este pais las vacas tienen una Carta de Derechos legal y oficial"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasIndia.length); // numero random del arreglo pistas
                pista = pistasIndia[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;



                case "Irlanda" :
                pistasIrlanda =["Es prohibido emborracharse en publico"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasIrlanda.length); // numero random del arreglo pistas
                pista = pistasIrlanda[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;


                case "Palaos" :
                pistasPalaos =["Su capital es la mas pequeña del mundo con una poblacion de 271 ciudadanos"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasPalaos.length); // numero random del arreglo pistas
                pista = pistasPalaos[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;

                case "San Marino" :
                    pistasSan_Marino =["Es el pais mas viejo del mundo"];// arreglo con pistas
                    pistaRandom = Math.floor(Math.random() * pistasSan_Marino.length); // numero random del arreglo pistas
                    pista = pistasSan_Marino[pistaRandom];
                    document.getElementById("pista").innerHTML  = pista;
                    break;
    
    
                    case "Yellowstone" :
                    pistasYellowstone =["Fue el primer parque nacional que se abrió en Estados Unidos"];// arreglo con pistas
                    pistaRandom = Math.floor(Math.random() * pistasYellowstone.length); // numero random del arreglo pistas
                    pista = pistasYellowstone[pistaRandom];
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
   
    eleccionRandom = Math.floor(Math.random() * musica.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = musica[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE
        
     // PISTAS // 

     switch (eleccion){
        case "David Bisbal" :
            pistasDavid_Bisbal =["Le adjudica su fama a Operación Triunfo"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasDavid_Bisbal.length); // numero random del arreglo pistas
            pista = pistasDavid_Bisbal[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;


            case "The Beatles" :
            pistasThe_Beatles =['¿Cuál es el artista o grupo que más discos ha vendido en la historia?'];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasThe_Beatles.length); // numero random del arreglo pistas
            pista = pistasThe_Beatles[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;


            case "Madona" :
            pistasMadona =["es la artista musical femenina con más ventas de la historia"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasMadona.length); // numero random del arreglo pistas
            pista = pistasMadona[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break; 


            case "Sandro" :
            pistasSandro =["Utilizo este nombre ya que las autoridades no le permitieron llamarlo asi legalmente."];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasSandro.length); // numero random del arreglo pistas
            pista = pistasSandro[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;



            case "Juan Gabriel" :
            pistasJuan_Gabriel =["Antes se hacía llamar Adan Luna como nombre artistíco"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasJuan_Gabriel.length); // numero random del arreglo pistas
            pista = pistasJuan_Gabriel[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;


        

            case "Roberto Carlos" :
                pistasRoberto_Carlos =["Siempre viste con los colores celeste, blanco y azul"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasRoberto_Carlos.length); // numero random del arreglo pistas
                pista = pistasRoberto_Carlos[pistaRandom];
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
    
    
    eleccionRandom = Math.floor(Math.random() * CosasDeTicos.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = CosasDeTicos[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE
        
    switch (eleccion){
        case "Pura Vida" :
            pistasPura_Vida =["Se usa para saludar, para despedirse más que todo"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasPura_Vida.length); // numero random del arreglo pistas
            pista = pistasPura_Vida[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
            case "Carebarro" :
                pistasCarebarro =["Se le llama asi a una persona  que es sinverguenza, descarada, sínica o muy tranquila"];// arreglo con pistas
                pistaRandom = Math.floor(Math.random() * pistasCarebarro.length); // numero random del arreglo pistas
                pista = pistasCarebarro[pistaRandom];
                document.getElementById("pista").innerHTML  = pista;
                break;
                case "Pura Paja" :
                    pistasPura_Paja =["Es como decirle mentiroso o irresponsable a una persona pero que no suene tan fuerte"];// arreglo con pistas
                    pistaRandom = Math.floor(Math.random() * pistasPura_Paja.length); // numero random del arreglo pistas
                    pista = pistasPura_Paja[pistaRandom];
                    document.getElementById("pista").innerHTML  = pista;
                    break;
                    case "Chunche" :
                        pistasChunche =["Se le dice a cualquier cosa material que no puedas o sepas llamarlo por su verdadero nombre"];// arreglo con pistas
                        pistaRandom = Math.floor(Math.random() * pistasChunche.length); // numero random del arreglo pistas
                        pista = pistasChunche[pistaRandom];
                        document.getElementById("pista").innerHTML  = pista;
                        break;
                        case "Juega de Vivo" :
                            pistasJuega_de_Vivo =["Se le llama así a una persona que se la cree de muy importante"];// arreglo con pistas
                            pistaRandom = Math.floor(Math.random() * pistasJuega_de_Vivo.length); // numero random del arreglo pistas
                            pista = pistasJuega_de_Vivo[pistaRandom];
                            document.getElementById("pista").innerHTML  = pista;
                            break;
                            case "Tapis" :
                                pistasTapis =["Se le dice así a los borrachos y también al trago de guaro"];// arreglo con pistas
                                pistaRandom = Math.floor(Math.random() * pistasTapis.length); // numero random del arreglo pistas
                                pista = pistasTapis[pistaRandom];
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
    
    
    
    eleccionRandom = Math.floor(Math.random() * gamer.length); // elije un nombre al asar del arreglo nombres
        

    eleccion = gamer[eleccionRandom]; // ESTA LUEGO HAY QUE QUITARLA Y QUE SEA EL RESULTADO DE CADA CASE

    // PISTAS // 

    switch (eleccion){
        case "Las Mariposas" :
            pistasLas_Mariposas =["¿Que animal inspiro a Satoshi Tajiri a crear Pokémon?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasLas_Mariposas.length); // numero random del arreglo pistas
            pista = pistasLas_Mariposas[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Minecraft" :
            pistasMinecraft =["¿Cual es el videojuego mejor vendido de todos los tiempos?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasMinecraft.length); // numero random del arreglo pistas
            pista = pistasMinecraft[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Jumpman" :
            pistasJumpman =["¿Cual era el nombre orignial de Mario?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasJumpman.length); // numero random del arreglo pistas
            pista = pistasJumpman[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Agua" :
            pistasAgua =["¿Que tipo de pokemon es fuerte contra Charmander?"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasAgua.length); // numero random del arreglo pistas
            pista = pistasAgua[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Sam Fisher" :
            pistasSam_Fisher =["Protagonista del juego Splinter Cell"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasSam_Fisher.length); // numero random del arreglo pistas
            pista = pistasSam_Fisher[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "John" :
            pistasJohn =["Nombre real de Master Chief's en Halo"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasJohn.length); // numero random del arreglo pistas
            pista = pistasJohn[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Animus" :
            pistasAnimus =["Nombre de la maquina de realidad virtual usada en Assasin's Creed"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasAnimus.length); // numero random del arreglo pistas
            pista = pistasAnimus[pistaRandom];
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
        case "Taisho" :
            pistasTaisho =["Nombre del zorro de las 9 colas en Naruto"];// arreglo con pistas
            pistaRandom = Math.floor(Math.random() * pistasTaisho.length); // numero random del arreglo pistas
            pista = pistasTaisho[pistaRandom];
            document.getElementById("pista").innerHTML  = pista;
            break;
        case "Indara" :
            pistasIndara =["Nombre del ancestro oringla del clan Uchiha"];// arreglo con pistas
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
    audio.volume = 0;
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


