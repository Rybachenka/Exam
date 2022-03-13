$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots: true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:500,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        // autoplay: true,  Автовоспроизведение
        // autoplaySpeed:2000,
        // pauseOnFocus:true,
        // pauseOnHover:true,
        // pauseOnDotshover: true,
        // draggable:true,   Перемещение мышкой комп
        // swipe:true,        Мобильные
        touchThreshold:10,
        waitForAnimate:false, 
        // centerMode: true, Картинка по центру

        // Ширина слайдов определяется контентом
        // variablewidth:true,  

        // Количество картинок в одном слайде
        // rows:1

        // slidesPerRow:1

        // Вертикальный слайдер
        // vertical:true,

        // Отзывчивость
        responsive:[
            {
                breakpoint:785,
                settings:{
                    slidesToShow:2
                }
            }, {
                breakpoint:650,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    });
})