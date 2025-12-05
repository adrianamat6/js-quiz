

function start_quiz(){

    let nombre = prompt('¿Cómo te llamas?')
    let respuesta_1 = prompt(nombre + ' '+ ', ¿cuál es la capital de Italia?')
    let cajaResultado = document.querySelector( '#contenedor_fallo_pregunta' );


    if (respuesta_1 === 'Roma'){
        let respuesta_2 = prompt(nombre + ' '+ ', ¿en qué estación del año estamos?')

        if (respuesta_2 ==='Otoño'){
            let respuesta_3 = prompt(nombre + ' '+ '¿en qué continente está China?')
            
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



}
