// function carregarPaginaTer() {  }

function carregarPaginaVoltartTer(){
    $(".conteudoDinamico").load("segundo.html");
    $("#terceira").removeClass("itemCheckboxClicado");
    $("#segunda").addClass("itemCheckboxClicado");
}