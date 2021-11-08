/* Testimonial carousel */

$(document).ready(function(){
    $('.testimonial-slide').owlCarousel({
		navigation : true,
		navText: [$('.text-prev'), $('.text-next')],
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		items : 1, 
		center:true,
		loop:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
	});
});