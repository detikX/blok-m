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


var popup = document.getElementById('popup-wrapper');
var btn = document.getElementById("popup-btn");
var span = document.getElementById("close");
btn.onclick = function () {
    popup.classList.add('show');
}
span.onclick = function () {
    popup.classList.remove('show');
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.classList.remove('show');
    }
}