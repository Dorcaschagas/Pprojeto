function carregarPaginaWel(){
    $(".conteudoDinamico").load("segundo.html");
    $("#primeira").removeClass("itemCheckboxClicado");
    $("#segunda").addClass("itemCheckboxClicado");
}
