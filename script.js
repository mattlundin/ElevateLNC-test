// gsap.to('.fly-in', {
// 	// x: 200,
// 	opacity: 1,
// 	duration: 1.2,
// 	'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
// });
window.onload = function () {
	window.scrollTo(0, 0);
};

const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-list');
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

//~ mobile nav
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list a');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});
	//close nav when nav-link clicked
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			navList.classList.toggle('open');
			burger.classList.toggle('toggle');
		});
	}
};
navSlide();

//~ mobile vh toolbar fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// GSAP
gsap.to('.nav', {
	y: 0,
	opacity: 1,
	duration: 1,
});
