<script>
	// Declaring variables

	// @variable loaded
	// Determines if the component is loaded
	// or no (required for transition to work)
	let loaded = false;
	
	// Importing animations
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	// Let's now change our loaded state on component mount.
	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 25)
	});
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
</style>

{ #if loaded }
	<main in:fade class="bg-gray-100 w-full">
		<!-- Hero -->
		<section class="w-full relative flex flex-col md:flex-row justify-center items-center h-100vh px-4 md:px-8 lg:px-16">
			<!-- Text -->
			<div class="w-full px-4 md:w-1/3 md:px-0">
				<div>
					<h1 class="text-2xl">Уроки по рисованию, полностью бесплатно.</h1>

					<p class="text-sm mt-6">Ctrl+Paint.ru это сайт, на котором вы сможете найти полностью бесплатные и частично* переведённые уроки по графическому рисованию от профессионалов.</p>

					<p class="mt-6 text-extra-xs text-gray-700">*частично переведённые — у некоторых видеороликах есть только субтитры; некоторые переведенны и озвученны.</p>
				</div>

				<!-- Buttons -->
				<div class="mt-6 w-full flex justify-center">
					<button class="uppercase px-6 py-2 rounded-full text-white text-sm bg-blue-btn hover:bg-blue-500">
						начать обучение
					</button>
				</div>
			</div>

			<!-- Video -->
			<div class="w-full h-full lg:px-12 hidden md:block">
				<iframe class="w-full h-full" title="Welcoming video" src="https://player.vimeo.com/video/227982259?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
			</div>
		</section>
	</main>
{ /if }