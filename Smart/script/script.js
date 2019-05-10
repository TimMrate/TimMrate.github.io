$(function () {
$('.gumb_btn').on('click', function (event){
	event.preventDefault();
	$(this).toggleClass('gumb_btn_active');
});
})