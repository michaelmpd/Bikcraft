// $(".rslides").responsiveSlides({
//     auto: true,             // Boolean: Animate automatically, true or false
//     speed: 500,            // Integer: Speed of the transition, in milliseconds
//     timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
//     pager: false,           // Boolean: Show pager, true or false
//     nav: false,             // Boolean: Show navigation, true or false
//     random: false,          // Boolean: Randomize the order of the slides, true or false
//     pause: false,           // Boolean: Pause on hover, true or false
//     pauseControls: true,    // Boolean: Pause when hovering controls, true or false
//     prevText: "Previous",   // String: Text for the "previous" button
//     nextText: "Next",       // String: Text for the "next" button
//     maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
//     navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
//     manualControls: "",     // Selector: Declare custom pager navigation
//     namespace: "rslides",   // String: Change the default namespace used
//     before: function(){},   // Function: Before callback
//     after: function(){}     // Function: After callback
//   });

$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  });


$(".rsliders_portfolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,          //Boolean: Show pager, true or false
});  

Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao blockquote").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function () {
		$(".animar").addClass("animated fadeInDown");
	}, 1600);

	setTimeout(function () {
		$(".introducao-interna h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao-interna p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".animar-interno").addClass("animated fadeInDown");
	}, 1200);
});

