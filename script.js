/* ================ Menu toggle ================ */
let ToggleBtn = document.querySelector('.toggle-btn');
ToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle('menu-open')
})

// close nav when click on a nav item
document.addEventListener("click", function(e) {
    if (!e.target.closest("#navbar") && !e.target.closest(".toggle-btn")) {
        document.body.classList.remove('menu-open')
    }
});
// Screen resize

window.addEventListener("resize", TextSwiper);

TextSwiper()

function TextSwiper() {
    var innerSize = document.querySelector('.inner').offsetWidth;
    if (innerSize <= 350) {
        var ScreenSize = 1;
    } else if (innerSize > 350 && innerSize < 700) {
        var ScreenSize = 2;
    } else {
        var ScreenSize = 3;

    }
    //  Initialize Swiper
    var swiper = new Swiper(".TextSwiper", {
        slidesPerView: ScreenSize,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};

var swiper = new Swiper(".DontSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


// Video controls
function VideoPlay(e) {
    var videbox = e.nextElementSibling;
    if (videbox.paused) {
        e.classList.add('fa-pause-circle');
        e.classList.add('play');
        e.classList.remove('fa-play-circle');
        videbox.play();
    } else {
        e.classList.remove('play');
        e.classList.add('fa-play-circle');
        e.classList.remove('fa-pause-circle');
        videbox.pause();
    }
}