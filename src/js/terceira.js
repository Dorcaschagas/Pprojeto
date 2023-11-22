function carregarPaginaVoltar(){
    $(".conteudoDinamico").load("segundo.html");
    $("#terceira").removeClass("itemCheckboxClicado");
    $("#segunda").addClass("itemCheckboxClicado");
}