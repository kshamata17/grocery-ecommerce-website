var corouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width()

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);

})

// custom-select script
document.addEventListener('DOMContentLoaded', function() {
    const selects = document.querySelectorAll('.custom-select');
    selects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value !== "") {
                this.classList.add('selected-option');
            } else {
                this.classList.remove('selected-option');
            }
        });
    });
});
