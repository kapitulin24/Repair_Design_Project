$(document).ready(function(){

    //start slick section project
    function startSlider(slider) {
        $(slider).slick({
            speed: 750,
            variableWidth: true,
            nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrow_cw.svg" alt=""></button>',
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
        player.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/oRkliX6zs4Y?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        playBtn.style.display = "none";
    });
    //end video play
});