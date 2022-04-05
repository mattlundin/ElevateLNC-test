// window.onload = function () {
// 	window.scrollTo(0, 0);
// };
gsap.registerPlugin(ScrollTrigger);

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
	// let navListSlide = gsap.fromTo(
	// 	'navList',
	// 	{ opacity: 0, x: -100 },
	// 	{ opacity: 1, x: 0, stagger: 1 }
	// );

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
		// gsap mobile
		//
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

//*~~~* GSAP;
let tl = gsap.timeline({
	defaults: { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
});
// tl.to('.nav', {})
tl.to(
	'.header-container',
	{
		delay: 1.2,
	},
	'-=1.5'
)
	.to('.nav-list a', { x: 0 })
	.to('.header-logo', {
		'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
		duration: 1.2,
	})
	.to(
		'.header-text',
		{
			duration: 1,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
		},
		'-=1'
	);

//scroll trigger
gsap.from('.hire-outer', {
	scrollTrigger: {
		trigger: '.hire-outer',
		start: '20px 80%',
	},
	opacity: 0,
	x: 150,
	duration: 2,
	ease: 'elastic',
});
gsap.to('.block1', {
	scrollTrigger: {
		trigger: '.block1',
		start: '10px 90%',
	},
	x: 0,
	opacity: 1,
	duration: 1.3,
	'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
});
gsap.to('.block2', {
	scrollTrigger: {
		trigger: '.block2',
		start: '10px 90%',
	},
	x: 0,
	opacity: 1,
	duration: 1.3,
	'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
});

// * LARGER SCREENS FOR .BOX ELEMENTS
const largeMedia = window.matchMedia('(min-width: 956px)');
if (largeMedia.matches) {
	gsap.to('.box', {
		scrollTrigger: {
			trigger: '.box',
			start: '10px 90%',
		},
		delay: 0.4,
		stagger: 0.5,
		duration: 0.5,
		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	});
}
if (largeMedia.matches) {
	gsap.to('.box h4', {
		scrollTrigger: {
			trigger: '.box h4',
			start: '10px 90%',
		},
		y: 0,
		opacity: 1,
		delay: 0.4,
		stagger: 0.5,
		duration: 0.5,
	});
}
if (largeMedia.matches) {
	gsap.to(
		'.box p',
		{
			scrollTrigger: {
				trigger: '.box p',
			},
			y: 0,
			opacity: 1,
			delay: 0.5,
			stagger: 0.5,
			duration: 0.5,
		},
		'-=.3'
	);
}
// * SMALLER SCREENS FOR .BOX ELEMENTS
const smallMedia = window.matchMedia('(max-width: 955px)');

const boxes = gsap.utils.toArray('.box');
const boxHeaders = gsap.utils.toArray('.box h4');
const boxPs = gsap.utils.toArray('.box p');

for (let i = 0; i < boxes.length; i++) {
	let box = boxes[i];

	if (smallMedia.matches) {
		gsap.to(box, {
			scrollTrigger: {
				trigger: box,
				start: '10px 90%',
			},
			delay: 0.4,
			// stagger: 0.5,
			duration: 0.8,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		});
	}
}
for (let i = 0; i < boxHeaders.length; i++) {
	let boxHeader = boxHeaders[i];

	if (smallMedia.matches) {
		gsap.to(boxHeader, {
			scrollTrigger: {
				trigger: boxHeader,
				start: '10px 90%',
			},
			y: 0,
			opacity: 1,
			delay: 0.4,
			// stagger: 0.5,
			duration: 0.5,
		});
	}
}
for (let i = 0; i < boxPs.length; i++) {
	let boxP = boxPs[i];

	if (smallMedia.matches) {
		gsap.to(boxP, {
			scrollTrigger: {
				trigger: boxP,
			},
			y: 0,
			opacity: 1,
			delay: 0.5,
			stagger: 0.6,
			duration: 0.5,
		});
	}
}

// let scrollTL = gsap.timeline({scrollTrigger: {

// }})
const servicesTL = gsap.timeline({
	ease: 'power1.out',
	scrollTrigger: {
		trigger: '#services',
		start: 'top center',
		duration: 0.5,
		toggleActions: 'play none reverse none',
	},
});
servicesTL
	.from('.services-flag-container', { opacity: 0, x: 1200 })
	.from('.video-container', { x: 1200, rotate: 1080 })
	.from('.video-container video', { height: 0 })
	.from('.services-text', { opacity: 0, y: 500 })
	.from('.services-text p', { opacity: 0, duration: 0.8 });

// gsap.to('.services-flag-container', {
// 	scrollTrigger: {
// 		trigger: '.services-flag-container',
// 		start: '10px 90%',
// 	},
// 	x: 0,
// 	duration: 0.5,
// });
