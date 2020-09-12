(function(){
// Objeto con las propiedades del efecto lightbox
var propLightbox = {
    btnModal: document.getElementsByClassName('lightbox'),
    video: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    container_modal: null,
    modal: null,
    cerrarModal: null,
    animacion: 'fade'
}

// Objeto con los métodos del efecto lightbox
var metLightbox = {
    inicio: function(){
        for (let i = 0; i < propLightbox.btnModal.length; i++) {
            propLightbox.btnModal[i].addEventListener('click',metLightbox.creaModal)
        }
    },

    creaModal: function(){
        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'container_modal');
        propLightbox.container_modal = document.getElementById('container_modal');
        propLightbox.container_modal.style.width = '100%';
        propLightbox.container_modal.style.height = '100%';
        propLightbox.container_modal.style.position = 'fixed';
        propLightbox.container_modal.style.zIndex = '1000';
        propLightbox.container_modal.style.background = 'rgba(0,0,0,0.8)';
        propLightbox.container_modal.style.top = '0';
        propLightbox.container_modal.style.left = '0';

        propLightbox.container_modal.appendChild(document.createElement('DIV')).setAttribute('id','modal');
        propLightbox.modal = document.getElementById('modal');

        propLightbox.modal.style.height = '100%';
        propLightbox.modal.style.display = 'flex';
        propLightbox.modal.style.justifyContent = 'center';
        propLightbox.modal.style.alignItems = 'center';

        var frame = '<iframe class="video-modal" width="560" height="315" src="https://www.youtube.com/embed/D3NTm6BqDIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        
        // propLightbox.modal.appendChild(document.createElement('IFRAME')).setAttribute('src','https://www.youtube.com/embed/D3NTm6BqDIk');
        propLightbox.modal.innerHTML=frame;

        if (propLightbox.animacion == 'fade' ) {
            document.getElementsByClassName('video-modal')[0].style.opacity = 0;

            setTimeout(function(){
                document.getElementsByClassName('video-modal')[0].style.opacity = 1; 
            },50)
        }
        propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times-circle-o" aria-hidden="true"></i>';
        propLightbox.cerrarModal = document.getElementById('cerrar_modal');
        propLightbox.cerrarModal.addEventListener('click',metLightbox.cerrarModal)

    },

    cerrarModal: function(){
        propLightbox.cuerpoDom.removeChild(propLightbox.container_modal);
    }
}

metLightbox.inicio();
}())
