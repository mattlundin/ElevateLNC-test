// gsap.to('.fly-in', {
// 	// x: 200,
// 	opacity: 1,
// 	duration: 1.2,
// 	'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
// });

const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-list');
const navItem = document.querySelectorAll('.nav ul li a');
const burger = document.querySelector('.burger');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', sizeNav);

function sizeNav() {
	if (window.scrollY > nav.offsetHeight + 100) {
		nav.classList.add('active');
		logo.style.width = '150px';
		logo.classList.add('active');
	} else {
		nav.classList.remove('active');
		logo.style.width = '220px';
	}
}
