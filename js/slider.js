const swiperMain = new Swiper('.swiper--main', {
    // Optional parameters
    direction: 'vertical',

    mousewheel: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        /*
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        */
    },

});


const swiperCard = new Swiper('.swiper--card', {
    // Optional parameters
    loop: true,



    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});