<template>
	<div id="jsz-skills-screen">
		<div id="jsz-skills-wrap">
			<p v-for="skill in skillsArr">{{skill}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Skills',
	data() {
		return {
			skillsArr: ['Vue.js', 'Nuxt.js', 'JavaScript', 'HTML5', 'CSS', 'Sass/SCSS', 'PHP', 'Node.js', 'MySQL', 'MariaDB', 'Handlebars', 'Express', 'MongoDB', 'JWT', 'bcrypt.js', 'Figma', 'F3 framework', 'phpMyAdmin']
		}
	},
	mounted() {
		this.skillsArr.sort(() => 0.5 - Math.random());
	}
}
</script>