$('.navbar-toggler').on('click', function () {

    if ($('.container-image').css('margin-top') === '-160px') {
        $('.container-image').css('margin-top', '-300px')
        $('.black').css('display', 'block')
    } else if ($('.container-image').css('margin-top', '-300px')){
        $('.container-image').css('margin-top', '-160px')
        $('.black').css('display', 'none')
    }

})


$('.gallery-item').sort(function (a, b) {

    var contentA =parseInt( $(a).data('sort'));
    var contentB =parseInt( $(b).data('sort'));
    return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
}).appendTo($('#gallery'))


