$(document).ready(function(){
  //Accion para botones de editar
  $('.btn-editar').on('click',function(){
   console.log($(this).attr('data-id-estudiante'));
  });

  //accion para botones eliminar
  $('.btn-eliminar').on('click',function(){
    $(this).closest('tr').hide();
   });

   //accion para boton Nuevo Regustro
  $('#btnNuevoRegistro').on('click',function(){
    location.href= $(this).attr('data-url-formulario');
   });
});