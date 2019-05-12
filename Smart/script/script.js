$(function () {
$('.btn_menu').on('click', function (event){
	event.preventDefault();
	$(".fa-angle-double-left").toggleClass('rightI');
	$('.menu').toggleClass('menu_active');
});
})