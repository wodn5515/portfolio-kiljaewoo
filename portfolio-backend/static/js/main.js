function navDropdown(){
    if($(window).scrollTop() > 0){
        $('#nav').addClass('scroll');
    }else{
        $('#nav').removeClass('scroll');
    }
}

function navHighlight(anchor){
    $('#nav li.on').removeClass('on')
    $("#nav [dest=" + anchor + "]").addClass('on')
}

function navOn(){
    let scroll = $(window).scrollTop();
    let scroll2 = scroll+90;
    if(scroll2 > $('#contact')[0].offsetTop){
        navHighlight('contact')
    }else if(scroll2 > $('#project')[0].offsetTop){
        navHighlight('project')
    }else if(scroll2 > $('#skill')[0].offsetTop){
        navHighlight('skill')
    }else if(scroll2 > $('#about')[0].offsetTop){
        navHighlight('about')
    }else{
        navHighlight('home')
    }
}

function mobNavVisible(){
    if($('#nav ul.visible')[0]){
        $('#nav ul.visible').removeClass('visible')
    }else{
        $('#nav ul').addClass('visible')
    }
    console.log('asd')
}

$(window).scroll(function() {
    navOn();
    navDropdown();
});

$('.dest').click(function(event){
    let destId = $(event.currentTarget).attr('dest');
    let destScroll = $('#'+destId)[0].offsetTop;
    $('html, body').animate({scrollTop : destScroll-84}, 400);
    mobNavVisible();
})

$('.mob-menu').click(function(event){
    mobNavVisible();
})