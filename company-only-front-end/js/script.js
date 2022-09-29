$('#company-nav').on('click', function (e) {

    $('.background').toggleClass("show-background")
    $('.dongjin-navbar').toggleClass("navbar-fixed")
    e.preventDefault()
})

$('#career-nav').on('click', function (e) {

    $('.background').toggleClass("show-background")
    $('.dongjin-navbar').toggleClass("navbar-fixed")
    e.preventDefault()
})

$('#gallery-nav').on('click', function (e) {

    $('.background').toggleClass("show-background")
    $('.dongjin-navbar').toggleClass("navbar-fixed")
    e.preventDefault()
})


$('.gallery-item').sort(function (a, b) {

    var contentA =parseInt( $(a).data('sort'));
    var contentB =parseInt( $(b).data('sort'));
    return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
}).appendTo($('#gallery'))


$('.career-con-header>.pos .sort-icon').on('click', function () {
    var els = $('.career-li').get();

    els.sort(function(el1, el2){
        return $(el1).text().trim().localeCompare($(el2).text().trim())
    })

    $('.career-ul').append(els)
})

$('.career-con-header>.sta .sta-sort-icon').on('click', function () {
    $('.career-li').sort(function (a, b) {

        var contentA =parseInt( $(a).data('sort'));
        var contentB =parseInt( $(b).data('sort'));
        return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
    }).appendTo($('.career-ul'))
})


