$(document).ready(function(){

    //start tabs section project
    $('ul.projects__tabs-name').on('click', 'li:not(.projects__tab_active)', function() {
        $(this)
            .addClass('projects__tab_active').siblings().removeClass('projects__tab_active')
            .closest('div.projects__tabs').find('div.projects__content').removeClass('projects__content_active').eq($(this).index()).addClass('projects__content_active');
        });
    //end tabs section project

    //start slick section project
    $('.project__preview-slider').slick({
        speed: 750,
        variableWidth: true,
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_cw.svg" alt=""></button>',
    });
    //end slick section project

    //start reload slider after change tabs
    $('ul.projects__tabs-name').on('click', () => {
        $('.project__preview-slider').slick('unslick');
        $('.project__preview-slider').slick({
            speed: 750,
            variableWidth: true,
            nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_cw.svg" alt=""></button>',
        });
      });
    //end reload slider after change tabs

  });