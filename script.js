// const navSlide = () => {
// 	const burger = document.querySelector('.burger');
// 	const nav = document.querySelector('.nav-links');
// 	const navLinks = document.querySelectorAll('.nav-links li');

// 	burger.addEventListener('click', () => {
// 		// Toggle Nav
// 		nav.classList.toggle('nav-active');
// 	// Animate Links
// 	navLinks.forEach((link, index) => {
// 		if (link.style.animation) {
// 			link.style.animation = ''
// 		} else {
// 			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
// 		}
// 	})
// 	// Burger animation 
// 	burger.classList.toggle('toggle');
// 	});
// };

// navSlide();

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;


function fixNav() {
	if (window.scrollY > topOfNav) {
		//when we make a nav element fixed position CSS (as is here fixed-nav), it no longer takes up space and sort of floats on top of the browser. because of reflow on the page, the class= site-wrap then takes up the empty space now and so creates a jerky page reaction. thus need to calculate the nav height and enter this in by adding some padding
		document.body.style.paddingTop = nav.offsetHeight + 'px';

		//create classList to the body and not the children elements as easier to manage 
		document.body.classList.add('fixed-nav');

		document.querySelector('.name').classList.add('removeName');

	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove('fixed-nav');
		document.querySelector('.name').classList.remove('removeName');
	}
}
window.addEventListener('scroll', fixNav);