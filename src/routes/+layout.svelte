<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.png" />

	<!-- Apple Web App -->
	<link rel="apple-touch-icon" href="/favicon.png" />
	<meta name="apple-mobile-web-app-title" content="Todo" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
</svelte:head>

{@render children()}
