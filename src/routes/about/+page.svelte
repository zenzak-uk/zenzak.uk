<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/Depth3D/Hero.svelte';
</script>

<Header></Header>

<Hero
	image={{
		image: '/images/me.webp',
		depth: '/images/depth.png'
	}}
/>
