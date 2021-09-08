(function(){

    var propParallax = {

        seccion: document.querySelector('.parallax'),
        recorrido: null,
        limite: null

    }

    var metParallax = {

        inicio: function(){
            window.addEventListener('scroll', metParallax.scrollParallax);
        },

        scrollParallax: function(){
            //pageYOffset es una propiedad de window que dice cuanto has recorrido con el scroll
            propParallax.recorrido = window.pageYOffset;
            //offsetTop dice cuanto hay desde el inicio de la pagina hasta el comienzo del contenedor que se usa
            //offsetHigh obtiene el valor de la altura de la seccion que se usa
            propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

            if ( propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite) {
               
                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';

            }else{
                propParallax.seccion.style.backgroundPositionY = 0; 
            }
        }
    }

    metParallax.inicio();
}())