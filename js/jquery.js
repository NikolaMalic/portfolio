$(function () {
var appendthis = "<div class='modal-overlay js-modal-close'></div>";
$("a[data-modal-id]").click(function (e) {
e.preventDefault();
$("body").append(appendthis);
$(".modal-overlay").fadeTo(500, 0.7);
//$(".js-modalbox").fadeIn(500);
var modalBox = $(this).attr("data-modal-id");
$("#" + modalBox).fadeIn($(this).data());
});
$(".js-modal-close, .modal-overlay").click(function () {
$(".modal-box, .modal-overlay").fadeOut(500, function () {
$(".modal-overlay").remove();
});
73
});
$(window).resize(function () {
$(".modal-box").css({
top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
left: ($(window).width() - $(".modal-box").outerWidth()) / 2,
});
});
$(window).resize();
});

$(document).ready(function()
{$("#logoanim").hover(function() {
    $(this).animate({
        color: "#5c2526",
        "border-bottom-width": "4px"
        
    }, 100);
}, function() {
    $(this).stop().animate({
        color: "#000000",
        "border-bottom-width": "0px"
        
    }, 200);
});});