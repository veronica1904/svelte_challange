<script>
	import "../app.css";
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Vero Store" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-[0.6]">
	<h1 class="w-full">
		<span class="block relative w-full h-0 pb-[calc(100%*495/2048)]">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" class="absolute w-full h-full top-0 block" />
			</picture>
		</span>

		Bienvenidos a Vero Storage, tu destino de confianza para todo lo que necesitas.
	</h1>
</section>

