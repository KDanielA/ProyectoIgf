$(document).ready(function(){
  //Accion para botones de editar
  $('.btn-editar').on('click',function(){
   console.log($(this).attr('data-id-estudiante'));
  });

  //accion para botones eliminar
  $('.btn-eliminar').on('click',function(){
    $(this).closest('tr').hide();
   });

   //accion para boton Nuevo Registro
  $('#btnNuevoRegistro').on('click',function(){
    location.href= $(this).attr('data-url-formulario');
   });

   //accion para boton Tabla
  $('#btnTabla').on('click',function(){
    location.href= $(this).attr('data-url-tabla');
   });

   //accion para boton index
  $('#btnInicio').on('click',function(){
    location.href= $(this).attr('data-url-index');
   });

    //accion para boton formulario
  $('#btnFormulario').on('click',function(){
    location.href= $(this).attr('data-url-form');
   });
});