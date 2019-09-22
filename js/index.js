const navSlide = () => {
	const burger = document.querySelector('.nav-burger');
	const nav = document.querySelector('.nav-links');
	const mobileNav = document.querySelector('.mobile-nav-links-container');

	burger.addEventListener('click', ()=>{
		// show links
		nav.classList.toggle('nav-active')

		// burger close button
		burger.classList.toggle('toggle');

		// show mobile nav
		mobileNav.classList.toggle('mobile-nav-show');
	});
}

navSlide();
