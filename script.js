

function start_quiz(){

    const tiempoInicio = Date.now();

    const nombre = prompt('¿Cómo te llamas?');
    const respuesta_1 = prompt(nombre + ' '+ ', ¿cuál es la capital de Italia?');
    let cajaResultado = document.querySelector( '#contenedor_fallo_pregunta' );


    if (respuesta_1 === 'Roma'){
        const respuesta_2 = prompt(nombre + ' '+ ', ¿en qué estación del año estamos?');

        if (respuesta_2 ==='Otoño'){
            const respuesta_3 = prompt(nombre + ' '+ '¿en qué continente está China?');
            
            if (respuesta_3 ==='Asia'){
                cajaResultado.innerHTML = '<h1> Felicidades ' + nombre + ', todas las respuestas son correctas</h1>';
            }else{
                cajaResultado.innerHTML = '<h1>' + nombre + ', fallaste, ¡vuelve a intentarlo!</h1>';
            }

        }else{
            cajaResultado.innerHTML = '<h1>' + nombre + ', fallaste, ¡vuelve a intentarlo!</h1>';
        }
    }else{
        cajaResultado.innerHTML = '<h1>' + nombre + ', tienes que estudiar más</h1>';
    }


    const tiempoFin = Date.now();

    const tiempoTranscurrido = (tiempoFin - tiempoInicio)/1000;

    console.log(tiempoTranscurrido)
    const cajaTiempo = document.querySelector( '.reloj' );  
    cajaTiempo.innerHTML = '<h2> Han transcurrido un total de ' + tiempoTranscurrido + ' '+ 'segundos</h2>'
}
