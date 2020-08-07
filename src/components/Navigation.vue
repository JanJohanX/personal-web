<template>
	<header>
		<nav>
			<ul class="jsz-nav-links">
				<li><a href="#jsz-welcome-screen">Home</a></li>
				<li><a href="#jsz-work-screen">Work</a></li>
				<li><a href="#jsz-skills-screen">Skills</a></li>
				<li><a href="#">About</a></li>
			</ul>
		</nav>
		<div id="navToggler" class="menu-btn">
			<div class="menu-btn_burger"></div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Navigation',
	methods: {
		scrollEffect: () => {
			window.addEventListener('scroll', function() {
				var  scrollTop = window.pageYOffset || document.body.scrollTop;
				if (scrollTop > 0) document.getElementsByTagName('header')[0].classList.add('jsz-scroll');
				else document.getElementsByTagName('header')[0].classList.remove('jsz-scroll');
			})
		},
		toggleNavMenu: () => {
			const menuBtn = document.getElementById('navToggler');
			const nav = document.getElementsByTagName('nav')[0];
			let menuOpen = false;
			menuBtn.addEventListener('click', () => {
				if (!menuOpen) {
					menuBtn.classList.add('open');
					nav.classList.add('opened');
					menuOpen = true;
				} else {
					menuBtn.classList.remove('open');
					nav.classList.remove('opened');
					menuOpen = false;
				}
			})
		},
		smoothScroll(e) {
			e.preventDefault();
			const href = e.target.getAttribute("href");
			const offsetTop = document.querySelector(href).offsetTop;
			
			scroll({
				top: offsetTop,
				behavior: "smooth"
			});
		}
	},
	created() {
		this.scrollEffect();
		
	},
	mounted() {
		this.toggleNavMenu();
		const links = document.querySelectorAll(".jsz-nav-links a");
 
		for (const link of links) {
			link.addEventListener("click", this.smoothScroll);
		}
	}
}
</script>