let proximaTela

$(document).ready(function(){
    $(".conteudoDinamico").load("welcome.html");
    $("#primeira").addClass('itemCheckboxClicado');
})

function carregarPagina() {
    $(".conteudoDinamico").load("terceiro.html");
    $("#primeira").removeClass("itemCheckboxClicado");
    $("#segunda").addClass("itemCheckboxClicado");
  }
  
