<script>
	let showVideo = $state(false);
	let imageLoaded = $state(false);
	import { CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import Card from '$lib/components/transparent/Card.svelte';
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import { Dialog, DialogContent, DialogTrigger } from '$lib/components/ui/dialog';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import Button from '$lib/components/Button.svelte';
	import VideoPlayer from './VideoPlayer.svelte';
</script>

<section class="mx-auto max-w-6xl space-y-16 px-4 py-16">
	<!-- Hero / Positioning -->
	<div class="space-y-4 text-center">
		<p class="font-xl text-primary text-sm tracking-widest uppercase">Solutions</p>
		<h2 class="text-foreground text-4xl font-semibold md:text-5xl">
			Product Design, Modeling, and Launch‑Ready Visuals
		</h2>
		<p class="text-muted-foreground mx-auto max-w-3xl text-lg">
			I’m a photographer, engineer, and designer turned 3D artist. I build detailed, high-quality
			models with a focus on clean topology—then light, render, and animate them so they’re
			impossible to ignore.
		</p>
		<div class="text-muted-foreground flex flex-wrap items-center justify-center gap-2 text-sm">
			<span class="bg-muted/50 rounded px-2 py-1">Photographer</span>
			<span class="bg-muted/50 rounded px-2 py-1">Engineer</span>
			<span class="bg-muted/50 rounded px-2 py-1">Designer</span>
			<span class="bg-muted/50 rounded px-2 py-1">Programmer</span>
			<span class="bg-muted/50 rounded px-2 py-1">Animator</span>
			<span class="bg-muted/50 rounded px-2 py-1">3D Artist</span>
		</div>
	</div>

	<VideoPlayer
		videoUrl="https://player.vimeo.com/video/1099649861?h=00ba6dd0ad&dnt=1&autoplay=1"
		thumbnailUrl="/images/thumb.jpg"
		title="Zenzak Portfolio Video"
		thumbnailAlt="Portfolio showreel thumbnail"
	/>

	<!-- Outcomes Grid (Product Design & Modeling first) -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">Concept Modeling & Sculpting</CardTitle>
				<CardDescription class="text-base">From sketch to clean 3D geometry.</CardDescription>
			</CardHeader>
			<CardContent class="text-card-foreground text-base">
				Rapid ideation models, hard-surface and organic sculpting, and Subdivision Surface modeling
				to solve proportions and ergonomics for confident reviews.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">High-Fidelity Surfacing & Texturing</CardTitle>
				<CardDescription class="text-base">Models ready for their close-ups.</CardDescription>
			</CardHeader>
			<CardContent class="text-card-foreground text-base">
				Clean polygonal modeling, detailed sculpting, and meticulous UV unwrapping for flawless
				texture application.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">Retopology & UV Mapping</CardTitle>
				<CardDescription class="text-base">Optimized models for any application.</CardDescription>
			</CardHeader>
			<CardContent class="text-card-foreground text-base">
				Efficient retopology for clean, animatable geometry and expert UV mapping for
				distortion-free texturing.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">CMF & Lighting Studies</CardTitle>
				<CardDescription class="text-base">Get the material story right.</CardDescription>
			</CardHeader>
			<CardContent class="text-card-foreground text-base">
				Realistic materials, texture authoring, and studio/lifestyle lighting from a photographer’s
				perspective.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">Hero Renders & Photo Composites</CardTitle>
				<CardDescription class="text-base">Centerpiece imagery that sells.</CardDescription>
			</CardHeader>
			<CardContent class="text-card-foreground text-base">
				8K hero shots, transparent variants for web and print, and photo-real composites that blend
				real-world photography with CG precision.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">Explainers & Interactive 3D</CardTitle>
				<CardDescription class="text-base"
					>Clarity for reviews, sales, and documentation.</CardDescription
				>
			</CardHeader>
			<CardContent class="text-card-foreground text-base">
				Exploded views, mechanism breakdowns, and embedded 3D/AR viewers for web and trade shows.
			</CardContent>
		</Card>
	</div>
	<VideoPlayer
		videoUrl="https://player.vimeo.com/video/1116834824?h=00ba6dd0ad&dnt=1&autoplay=1"
		thumbnailUrl="/images/pelton-thumb.webp"
		title="Pelton wheel fluid simulation"
		thumbnailAlt="Pelton wheel fluid simulation thumbnail"
	/>
</section>
