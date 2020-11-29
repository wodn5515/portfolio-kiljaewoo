function navPopup(){
    if($(window).scrollTop() > 0){
        $('#nav').addClass('scroll');
    }else{
        $('#nav').removeClass('scroll');
    }
}

$(window).scroll(function() {
    navPopup();
});

$('.dest').click(function(event){
    let destId = $(event.currentTarget).attr('dest');
    let destScroll = $('#'+destId)[0].offsetTop;
    $('html, body').animate({scrollTop : destScroll}, 400);
})