<script>
	// Let's now import our styles component
	import styles from "../components/styles.svelte";
</script>

<!-- Importing some fonts -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

	/* Background image for header */
	.header {
		background-image: url("https://images.squarespace-cdn.com/content/50a3c190e4b0d12fc9231429/1358377903718-G595RVPR35BJ7F4W87QA/header_background.jpg?content-type=image%2Fjpeg");
		background-repeat: no-repeat;
		background-position: top left;
		background-size: auto;
		background-attachment: fixed;
	}
</style>

<svelte:head>
	<title>Ctrl+Paint - Перевод профессиональных и бесплатных уроков по компьютерному рисованию.</title>
</svelte:head>

<main style="font-family: 'Helvetica Neue', 'Arial', 'sans-serif'">
	<!-- Header -->
	<div style="z-index: 2;" class="header fixed w-full py-1 border-b-1 border-solid border-gray-300 items-center flex justify-center md:justify-around px-2 md:px-6 lg:px-12 ">
		<!-- Logotype -->
		<div>
			<img style="height: 2.4rem;" src="//static1.squarespace.com/static/50a3c190e4b0d12fc9231429/t/50f87f8ce4b0b3f0a2deeb1d/1600354330125/?format=1500w" alt="unfull logotype">
		</div>

		<!-- Links -->
		<div class="uppercase text-xs hidden md:block">
			<a href="/" class="mx-6 font-semibold text-black">главная</a>
			<a href="/videos/recent" class="mx-6 font-semibold text-gray-600">последние видео</a>
			<a href="/videos/library" class="mx-6 font-semibold text-gray-600">библиотека</a>
			<a href="/videos/about" class="mx-6 font-semibold text-gray-600">про курс</a>
			<a href="https://ctrlpaint.myshopify.com/" class="mx-6 font-semibold text-gray-600">магазин ctrl+paint</a>
		</div>
	</div>

	<!-- Site's content -->
	<div style="z-index: 1;" class="relative w-full h-full">
		<slot></slot>
	</div>
</main>