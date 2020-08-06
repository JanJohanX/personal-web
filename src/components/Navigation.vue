<template>
	<header>
		<nav>
			<ul class="jsz-nav-links">
				<li><a href="#">Home</a></li>
				<li><a href="#">Work</a></li>
				<li><a href="#">Skills</a></li>
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
		}
	},
	created() {
		this.scrollEffect();
		
	},
	mounted() {
		this.toggleNavMenu();
	}
}
</script>