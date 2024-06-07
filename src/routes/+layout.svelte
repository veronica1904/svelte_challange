<script>
	import '../app.css';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app flex flex-col min-h-screen">
	<Header />

	<main class="flex-1 flex flex-col p-4 w-full max-w-6xl mx-auto box-border">
		<slot />
	</main>

	<footer class="flex flex-col justify-center items-center p-3 sm:p-3 sm:py-0">
		<p>En nuestra no busques productos busca detalles para regalar o regalarte!</p>
	</footer>
</div>
