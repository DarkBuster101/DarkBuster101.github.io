$('.navbar-toggler').on('click', function () {

    if ($('.container-image').css('margin-top') === '-160px') {
        $('.container-image').css('margin-top', '-300px')
        $('.black').css('display', 'block')
    } else if ($('.container-image').css('margin-top', '-300px')){
        $('.container-image').css('margin-top', '-160px')
        $('.black').css('display', 'none')
    }

})

