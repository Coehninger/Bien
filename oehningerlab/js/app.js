
$(document).ready(function() {

    $('#btnSend').click(function(){

        var errores = '';

            // Validado Nombre ================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre </p>';
            $('#names').css("border-bottom-color", "#f14b4b")
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

            // Validado Correo ================
        if( $('#email').val() == '' ){
            errores += '<p>Escriba un correo </p>';
            $('#email').css("border-bottom-color", "#f14b4b")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

            // Validado Mensaje ================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje </p>';
            $('#mensaje').css("border-bottom-color", "#f14b4b")
        }else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }
            // Enviando mensaje ================
        if(errores == '' == false) {
            var mensajeModal = '<div class="modal_wrap">'+
                                   '<div class="mensaje_modal">'+
                                        '<h3> Errores encontrados</h3>'+
                                            errores+
                                    '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

              $('body').append(mensajeModal);
        }
                 // Cerrar Modal ================
                 $('#btnClose').click(function(){
                            $('.modal_wrap').remove();
        });
    });
});

/* 
window.onload = function () {
    alert("cargado...");
 }
 */

/*
$(document).ready(function(){
    $("#mensaje").click(function(evento){
       alert("Has pulsado el enlace...nAhora serás enviado a DesarrolloWeb.com");
    });
 });
 */