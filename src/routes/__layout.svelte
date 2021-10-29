<script>
	import Drawer from "$lib/ui/Drawer.svelte";
	let open = false;
</script>
<style global lang="scss">
	@import "../lib/scss/bulma.scss";
	@import "../lib/scss/global.scss";
	.parent {
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100vh;
    	width: 100vw;

		header {padding: 0.5em 1em;}
	}
	i {cursor: pointer;}
</style>




<div class="parent">
	<header ><i class="material-icons" on:click="{() => {open = !open; console.log({open})}}">menu</i></header>
	<Drawer bind:open />
	<main >
		<!-- <Drawer bind:open /> -->
		<slot />
	</main>
</div>