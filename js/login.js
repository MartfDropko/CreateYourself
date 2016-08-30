(function() {

	var registerFormLink = $('#registerFormLink');
	var loginForm = $("#registrate-form");
	var registerForm = $("#login-form");
	var registerationFormLink = $('#register-form-link');
	var headingCustomLogin = $('.heading-custom-login');

	var loginFormLink = $('#loginFormLink');
	var logInFormLink =	$('#login-form-link');
	var headingCustomRegistr = $('.heading-custom-registr');

	var loginLink = $("#loginLink");

	loginLink.click(function(e){
		e.preventDefault();
	});

    registerFormLink.click(function(e) {
    	e.preventDefault();
    	loginForm.delay(100).fadeIn(100);
 		registerForm.fadeOut(100);
		registerationFormLink.removeClass('active');
        headingCustomLogin.removeClass('heading-custom-active');

		$(this).addClass('active');		
		$(this).addClass('heading-custom-active');
	
	});

	loginFormLink.click(function(e) {
		e.preventDefault();
		registerForm.delay(100).fadeIn(100);
 		loginForm.fadeOut(100);
		logInFormLink.removeClass('active');
		headingCustomRegistr.removeClass('heading-custom-active');

		$(this).addClass('heading-custom-active');
		$(this).addClass('active');

		
	});

})();