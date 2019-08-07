/*global $, window*/
$(function () {
    'use strict';
    // start change active class and space product(box product)
    $('nav .menu .left-menu a').on('click', function (e) {
        var imgBack = ['fruitimg.jpg', 'vegetableimg.jpg', 'whitemeatimg.jpg', 'redmeatimg.jpg','oilsimg.jpg', 'foods.jfif'];
        e.preventDefault();
        $(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
        $('.content .box-right .box-pro').fadeOut(500);
        $('#' + $(this).attr('data-show')).fadeIn(200);
        if($('html').attr('lang') === "en") {
            $('main').css('backgroundImage', 'url(css/img/image/' + imgBack[Number($(this).attr('data-indice'))] + ')');
        } else {
            $('main').css('backgroundImage', 'url(../css/img/image/' + imgBack[Number($(this).attr('data-indice'))] + ')');
        }
    });
    // stat show and hide contact form 
    $('nav .menu .right-menu a.contact').on('click', function (e) {
        e.preventDefault();
        $('.contact-form').fadeIn(500);
        $('#ctn').css('display', 'none');

    });
    $('.contact-form').on('click', function () {
        $(this).fadeOut();
        $('#ctn').fadeIn(200);
    });
    $('#about').on('click', function (e) {
        e.stopPropagation();
        $(this).addClass('hrll');
    });
    //start perpartion map google
    $('#location').on('click', function (e) {
        e.preventDefault();
        $('.map-google').fadeIn(500);
    });
    $('.map-google').on('click', function () {
        $(this).fadeOut();
    });
    $('#map').on('click', function (e) {
        e.stopPropagation();
    });
    //start media 
    var win = $(window).width();
    if (win <= 768) {
        $('nav .menu ul.first-list li.icon-bar').on('click', function () {
            if ($(this).hasClass('hide')) {
                $(this).parent('.first-list').animate({
                    left: '0%'
                });
                $(this).removeClass('hide');
                $(this).find('i').removeClass('fa-align-left').addClass('fa-angle-double-left');

            } else {
                $(this).addClass('hide');
                $(this).parent('.first-list').animate({
                    left: '-84%'
                });
                $(this).find('i').removeClass('fa-angle-double-left').addClass('fa-align-left');
            }
            
        });
        // strat preparation of the nav menu first list
        $('nav .menu .left-menu a').on('click', function () {
            $('html, body').animate({
                scrollTop : 1000
            }, 500);
            var icB = $('nav .menu ul.first-list li.icon-bar');
            if (icB.hasClass('hide')) {
                icB.parent('.first-list').animate({
                    left: '0%'
                });
                icB.removeClass('hide');
                icB.find('i').removeClass('fa-align-left').addClass('fa-angle-double-left');

            } else {
                icB.addClass('hide');
                icB.parent('.first-list').animate({
                    left: '-84%'
                });
                icB.find('i').removeClass('fa-angle-double-left').addClass('fa-align-left');
            }
        });
    }
    // start prapartion of the about box right
/* #27012e */
$('#about .ab-right .ayman-social div a').hover(function() {
$('#about .ab-right .cicle').css('border-color', '#27012e');
$(this).css('color', '#27012e');
$('#about .ab-left h2.stolz span').css('color', '#27012e');
}, function() {
    $(this).css('color', '#fff');
    $('#about .ab-right .cicle').css('border-color', '#161616');
    $('#about .ab-left h2.stolz span').css('color', '#fff');
});






    // validate form______________________________OK___________________
    // var ertext = true,
    //     ernum = true,
    //     erer = true;
    // $('.contact-form form input').on('blur', function () {
    //     var val = $(this).val();
    //     console.log(val);
    //     if($(this).attr('type') === 'text') {
    //         if(val.length < 3) {
    //             $(this).siblings('.faux').css('visibility', 'visible');
    
    //         } else{
    //             $(this).siblings('.faux').css('visibility', 'hidden');
    //             ertext= flase;
    //         }

    //     } else if ($(this).attr('type') === 'number' ) {
    //         if(val.length < 9) {
    //             $(this).siblings('.faux').css('visibility', 'visible');
    //         } else{
    //             $(this).siblings('.faux').css('visibility', 'hidden');
    //             ernum = false;
    //         }
    //     }
    //     if(win < 516) {
    //         if($(this).attr('type') === 'text') {
    //             if(val.length < 3) {
    //                 $(this).siblings('.faux').css('display', 'block');
        
    //             } else{
    //                 $(this).siblings('.faux').css('display', 'none');
    //                 ertext= flase;
    //             }
    
    //         } else if ($(this).attr('type') === 'number' ) {
    //             if(val.length < 9) {
    //                 $(this).siblings('.faux').css('display', 'block');
    //             } else{
    //                 $(this).siblings('.faux').css('display', 'none');
    //                 ernum = false;
    //             }
    //         }
    //     }
                                                                
    // });
    // $('.contact-form form input[type="email"]').on('blur', function () {
    //     var val = $(this).val();
    //     if(val.length === 0 ) {
    //         $(this).siblings('.faux').css('visibility', 'visible');
    //     } else {
    //         $(this).siblings('.faux').css('visibility', 'hidden');
    //         erer = false;
    //     }

    // });
    // $('.contact-form form textarea').on('blur', function () {
    //     var val = $(this).val();
    //     if(val.length < 10 ) {
    //         $(this).siblings('.faux').css('visibility', 'visible');
    //     } else {
    //         $(this).siblings('.faux').css('visibility', 'hidden');
    //         erer = false;
    //     }
                                                                
    // });
    // $('.contact-form form .btn').on('click', function (e) {
    //     $('.contact-form form input').blur();
    //     if(erer !== true || ertext !== true || ernum !== true) {

    //     } else {
    //         e.preventDefault();

    //     }
    // });
});