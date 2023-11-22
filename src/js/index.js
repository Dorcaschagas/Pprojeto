let proximaTela

$(document).ready(function(){
    $(".conteudoDinamico").load("welcome.html");
    $("#primeira").addClass('itemCheckboxClicado');

    let largura = $("html body").width()
    if(largura < 980){
        $(".opcoes").removeClass('d-flex')
    } else{
        $(".opcoes").addClass('d-flex')
    }
})

function carregarPagina() {
    $(".conteudoDinamico").load("terceiro.html");
    $("#primeira").removeClass("itemCheckboxClicado");
    $("#segunda").addClass("itemCheckboxClicado");
  }
  
