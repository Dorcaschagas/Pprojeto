var checked = false;

$(".itemCheckbox .label").on("click", function () {
  $(this).html('<i class="fa-solid fa-check"></i>');
});

$(".itemCheckbox .label").on("click", function () {
  $(this).html('<i class="fa-solid fa-check"></i>');
  checked = true
});

$(".botao").click(function () {
    if(checked){
        $(".conteudoDinamico").load("terceiro.html");
        $("#segunda").removeClass("itemCheckboxClicado");
        $("#terceira").addClass("itemCheckboxClicado");
    } else {
        alert("Selecione um item!");
    }
});

function carregarPaginaVoltar(){
    $(".conteudoDinamico").load("welcome.html");
    $("#primeira").addClass("itemCheckboxClicado");
    $("#segunda").removeClass("itemCheckboxClicado");
}

$(".botao").addClass('cursor-not-allowed')
