document.addEventListener('DOMContentLoaded', function () {
	"use strict";
  
	/* ------------------------------------------------
	 * UI INIT: Loader, Full Height, Carousel, Dropdowns
	 * ------------------------------------------------ */
	setTimeout(function () {
	  if (document.querySelector('#ftco-loader')) {
		document.querySelector('#ftco-loader').classList.remove('show');
	  }
	}, 1);
  
	const fullHeight = () => {
	  const elements = document.querySelectorAll('.js-fullheight');
	  elements.forEach(el => {
		el.style.height = window.innerHeight + 'px';
	  });
	  window.addEventListener('resize', () => {
		elements.forEach(el => {
		  el.style.height = window.innerHeight + 'px';
		});
	  });
	};
	fullHeight();
  
	if (typeof $ !== 'undefined') {
	  $('#carousel').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 30,
		nav: false,
		dots: true,
		items: 1
	  });
  
	  $('nav .dropdown').hover(function () {
		const $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	  }, function () {
		const $this = $(this);
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		$this.find('.dropdown-menu').removeClass('show');
	  });
  
	  $('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: { verticalFit: true }
	  });
  
	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	  });
  
	  $('#book_date, #book_time').each(function () {
		$(this).datepicker || $(this).timepicker; // in case they're added conditionally
	  });
  
	  let counterTriggered = false;
	  $('#section-counter').waypoint(function (direction) {
		if (!counterTriggered) {
		  $('.number').each(function () {
			const $this = $(this);
			$this.animateNumber({
			  number: $this.data('number'),
			  numberStep: $.animateNumber.numberStepFactories.separator(',')
			}, 7000);
		  });
		  counterTriggered = true;
		}
	  }, { offset: '95%' });
  
	  $.Scrollax();
	}
  
	/* ------------------------------------------------
	 * FORM HANDLERS
	 * ------------------------------------------------ */
  
	// SIGNUP
	const signupForm = document.getElementById('signupForm');
	if (signupForm) {
	  signupForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const { name, email, password } = signupForm;
		try {
		  const res = await fetch('/api/auth/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
			  name: name.value,
			  email: email.value,
			  password: password.value
			})
		  });
		  const data = await res.json();
		  if (res.ok) {
			localStorage.setItem('userEmail', email.value);
			localStorage.setItem('userId', data?.data?.user?._id || ''); // Optional: Store user ID
			alert('Signup successful!');
		  } else {
			alert(data.message || "Signup failed");
		  }
		} catch (err) {
		  console.error(err);
		  alert("An error occurred");
		}
	  });
	}
  
	// ORDER PLACEMENT
	document.querySelectorAll('.order-button').forEach(button => {
	  button.addEventListener('click', async () => {
		const productId = button.getAttribute('data-product-id');
		const userId = localStorage.getItem('userId');
  
		if (!userId) {
		  alert('Please login to place an order.');
		  return;
		}
  
		try {
		  const response = await fetch('/api/orders', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
			  user: userId,
			  product: productId,
			  quantity: 1
			})
		  });
		  const data = await response.json();
		  if (response.ok) {
			alert('Order placed successfully!');
		  } else {
			alert(data.message || 'Failed to place order');
		  }
		} catch (err) {
		  console.error(err);
		  alert('Error placing order');
		}
	  });
	});
  
	// FORGOT PASSWORD
	const forgotForm = document.getElementById('forgotPasswordForm');
	if (forgotForm) {
	  forgotForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		const email = forgotForm.email.value;
		try {
		  const res = await fetch('/api/auth/forgot-password', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email })
		  });
		  const data = await res.json();
		  if (res.ok) {
			alert('Reset link sent to your email.');
		  } else {
			alert(data.message || 'Failed to send reset link');
		  }
		} catch (err) {
		  console.error(err);
		  alert('An error occurred');
		}
	  });
	}
  
  });
  