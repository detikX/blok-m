// $('#myModal').on('shown.bs.modal', function (event) {
//     setTimeout(() => {
//         $('#myModal .modal-body').scrollTop(0);
//         // get the section using data

//         var section = $(event.relatedTarget).attr('data-section');
//         // get the top of the section
//         var sectionOffset = $('#section-' + section).offset()
//         console.log(sectionOffset);
//         //scroll the container
//         $('#myModal .modal-body').animate({
//             scrollTop: sectionOffset
//         }, "slow");

//     }, 2000);
//     // reset the scroll to top
// });

// $(".lini").click(function () {
//     $('main').hide();
//     $('.fixed-all').fadeIn();
//     $("html, body").animate({ scrollTop: 0 }, 10);
//     window.scrollTo(0, 0);
// })


var popup = $('#popup-wrapper');
var btn = document.getElementById("popup-btn");
var span = $("#close");
// btn.onclick = function () {
//     popup.classList.add('show');
// }
var btn = $(".content-title");
// var trig = $(".content-title").attr('data-name')

btn.click(function () {
    var datatrig = $(this).attr('data-name');
    var cek_ = "show-" + datatrig + "";
    popup.addClass('show');
    $(".popup-container").find("#" + cek_ + "").show()

})


// span.onclick = function () {
//     popup.classList.remove('show');
// }
span.click(function () {
    popup.removeClass("show")
    $(".datadata").hide()
})

window.onclick = function (event) {
    if (event.target == popup) {
        popup.classList.remove('show');
    }
}