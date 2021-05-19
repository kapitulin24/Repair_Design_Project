$(document).ready(function(){
    //const
    const srcYouTube = 'https://www.youtube.com/embed/oRkliX6zs4Y?autoplay=1',
          srcSliderArrow = 'icons/arrows/arrow_cw.svg',
          allowYouTube = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    
    //start slick section project
    function startSlider(slider) {
        $(slider).slick({
            speed: 750,
            variableWidth: true,
            nextArrow: '<button type="button" class="slick-next"><img src="' + srcSliderArrow + '" alt=""></button>',
        });
    }
    startSlider('.project__preview-slider');
    //end slick section project

    //start tabs
    let tab = document.querySelectorAll('li.projects__tab>div'),
        tabWrap = document.querySelectorAll('li.projects__tab'),
        tabs = document.querySelector('ul.projects__tabs-name'),
        contentTabs = document.querySelectorAll('div.projects__content'),
        dots = document.querySelector('div.projects__dots'),
        dot = document.querySelectorAll('div.projects__dots>span')
        arrowLeft = document.querySelector('div.projects__nav-left'),
        arrowRight = document.querySelector('div.projects__nav-right');

    //перезагрузка слайдера после смены таба
    function reloadSlider(slider) {
        $(slider).slick('unslick');
        startSlider(slider);
    };
    //удаление классов активности на точках, табах и контанта таба
    function hideContentTabs() {
        contentTabs.forEach(e => {
            e.classList.remove('projects__content_active');
        });
        tabWrap.forEach(e => {
            e.classList.remove('projects__tab_active');
        });
        dot.forEach(e => {
            e.classList.remove('active');
        });
    };
    //добаление классов активности к точке, табу и контенту таба
    function showContentTabs(i) {
        contentTabs[i].classList.add('projects__content_active');
        tabWrap[i].classList.add('projects__tab_active');
        dot[i].classList.add('active');
    };
    //операции выполняемые после каждой смены таба
    function clickEvent(i, slider) {
        hideContentTabs();
        showContentTabs(i);
        reloadSlider(slider);
    };
    //алгоритм после клика на таб или точку
    function clicker(elem, j, slider) {
        const target = elem.target;
        if (target) {
            j.forEach((e, i) => {
                if (e == target) {
                    clickEvent(i, slider);
                }
            });            
        }
    };
    //поиск индекса активного таба(для клика на стрелки)
    let index;
    function findIndex() {
        dot.forEach((e, i) => {
            if (e.classList.contains('active')) {
                index = i;
            }
        })
    };
    //клик на точку
    dots.addEventListener('click', (elem) => {
        clicker(elem, dot, '.project__preview-slider');
    });
    //клик на таб
    tabs.addEventListener('click', (elem) => {
        clicker(elem, tab, '.project__preview-slider');
    });
    //клик стрелка влево
    arrowLeft.addEventListener('click', () => {
        findIndex();
        index--;
        if (index < 0) {index = dot.length-1;}
        clickEvent(index, '.project__preview-slider');
    });
    //клик стрелка вправо
    arrowRight.addEventListener('click', () => {
        findIndex();
        index++;
        if (index > dot.length-1) {index = 0;}
        clickEvent(index, '.project__preview-slider');
    });
    //end tabs

    //start video play
    $('div.control__video-play').on('click', function() {
        let player = document.querySelector('div.control__video');
        let playBtn = document.querySelector('div.control__video-play');
        player.insertAdjacentHTML('afterbegin', '<iframe src="' + srcYouTube + '" title="YouTube video player" frameborder="0" allow="' + allowYouTube + '" allowfullscreen></iframe>');
        playBtn.style.display = "none";
    });
    //end video play

    //start validation
    function valideForms(form) {
        $(form).validate({
            focusCleanup: true,
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 22
                },
                email: {
                    required: true,
                    email: true
                  },
                policy: "required",
                phone: "required"
            },
            messages: {
                name: {
                    required: "Please, enter your name",
                },
                phone: {
                    required: "Please, enter your phone"
                },
                email: {
                    required: "Please, enter your E-mail",
                    email: "Incorrect E-Mail Address"
                  },
                policy: {
                    required: "You must consent to the processing of data"
                }
            }
        });
    }
    valideForms('form.repair__right-block-modal-form');
    valideForms('form.control__form');
    valideForms('form.modal__form');
    //end validation

    //start WOW
	new WOW({
		animateClass: 'animate__animated',
        offset: 0,
	   	resetAnimation: false
   }).init();
    //end WOW

    //start modal
    //open
    $('#request-h, #request-f').on('click', function() {
		$('.overlay, #modal').fadeIn();
        document.querySelector('body').style.overflow = 'hidden';
	});
    //close
    $('.modal__close').on('click', function() {
		$('.overlay, #modal').fadeOut();
        document.querySelector('body').style.overflow = 'visible';
	});
    //end modal
    //start footer
    window.addEventListener('scroll', function() {        
        if (document.documentElement.scrollTop > 100) {
            document.querySelector('footer').style.position = 'fixed';
        } else {document.querySelector('footer').style.position = 'static';}
      });
    //end footer
    //smooth scroll
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
	});
});