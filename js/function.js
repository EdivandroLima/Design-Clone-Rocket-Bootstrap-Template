window.onload= function() {
    // $('.load').toggleClass('load-hidden');
    document.getElementById('load').style.opacity="0";
    document.getElementById('load').style.visibility="hidden";
}

$(function () {

    // Menu navbar
    $('[data-toggle="collapse"]').on('click', function () {
        $('.navbar-collapse').toggleClass('overflow-collapse');
        $('.body').toggleClass('body-hidden')
    });

    // Tooltip Arquivos
    $('[data-toggle="tooltip"]').tooltip()
});