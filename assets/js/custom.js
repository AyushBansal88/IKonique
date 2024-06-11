$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


$(document).ready(function () {
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        // Other Slick options...
    });
});


var header = document.getElementById('headder');
window.addEventListener("scroll", function () {
    if (window.scrollY > 22) {
        header.classList.add('shadow-header');
        // header.classList.remove('header-prop');
    } else {
        header.classList.remove('shadow-header');
        // header.classList.add('header-prop');
    }
})
var logo_img = this.document.getElementById('logo');
window.addEventListener("scroll", function () {
    if (window.scrollY > 22) {
        logo_img.classList.add('small_logo');
    } else {
        logo_img.classList.remove('small_logo');
    }

})

$(document).ready(function () {
    Display();
});
function Display() {
    const counter = document.querySelectorAll('.counter');
    const array = Array.from(counter);
    array.map((item) => {
        let counterInnerText = item.textContent;
        let count = 0;
        if (counterInnerText >= 1200) {
            count = 1199;
        }
        else {
            count = 1;
        }

        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
}



