var myswiper = new Swiper(".big", {
    on: {
        slideChange: function() {
            var idx = myswiper.activeIndex;
            $('.nav ul>li').removeClass();
            $('.nav ul>li').eq(idx).addClass('active');
        }
    }
});


$('.nav ul').on('click', "li", function() {
    var index = $(this).index();
    myswiper.slideTo(index);
})


// $.ajax({
//     url: "data/data.json",
//     success: function(rs) {

//     }
// })