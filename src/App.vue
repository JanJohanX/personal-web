<template>
	<div id="app">
		<Navigation/>
		<main>
			<Welcome/>
			<Work/>
			<Skills/>
		</main>
	</div>
</template>

<script>
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Work from './components/Work';
import Skills from './components/Skills';


export default {
	name: 'App',
	components: {
		Navigation,
		Welcome,
		Work,
		Skills
	}
}
</script>

<style lang="scss">
a,
#app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
  color: #2c3e50;
//   margin: 0 8%;
//   margin-top: 60px;
}
</style>
