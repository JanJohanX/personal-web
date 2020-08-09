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
	data() {
		return {
			menuOpen: false,
		}
	},
	methods: {
		scrollEffect: () => {
			window.addEventListener('scroll', function() {
				var  scrollTop = window.pageYOffset || document.body.scrollTop;
				if (scrollTop > 0) document.getElementsByTagName('header')[0].classList.add('jsz-scroll');
				else document.getElementsByTagName('header')[0].classList.remove('jsz-scroll');
			})
		},
		toggleNavMenu() {
			document.getElementById('navToggler').addEventListener('click', () => {
				if (!this.menuOpen) this.openMenu();
				else this.closeMenu();
			})
		},
		openMenu() {
			document.getElementById('navToggler').classList.add('open');
			document.getElementsByTagName('nav')[0].classList.add('opened');
			this.menuOpen = true;
		},
		closeMenu() {
			document.getElementById('navToggler').classList.remove('open');
			document.getElementsByTagName('nav')[0].classList.remove('opened');
			this.menuOpen = false;
		},
		smoothScroll(e) {
			e.preventDefault();
			const href = e.target.getAttribute("href");
			const offsetTop = document.querySelector(href).offsetTop;
			this.closeMenu();
			
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