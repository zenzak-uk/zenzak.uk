<script>
	let showVideo = $state(false);
	let imageLoaded = $state(false);
	import { CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import Card from '$lib/components/transparent/Card.svelte';
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import { Dialog, DialogContent, DialogTrigger } from '$lib/components/ui/dialog';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="mx-auto max-w-6xl space-y-16 px-4 py-16">
	<!-- Hero / Positioning -->
	<div class="space-y-4 text-center">
		<p class="font-xl text-sm tracking-widest text-primary uppercase">Solutions</p>
		<h2 class="text-4xl font-semibold text-foreground md:text-5xl">
			Product Design, Modeling, and Launch‑Ready Visuals
		</h2>
		<p class="mx-auto max-w-3xl text-lg text-muted-foreground">
			I’m a photographer, engineer, and designer turned 3D artist. I build detailed, high-quality
			models with a focus on clean topology—then light, render, and animate them so they’re
			impossible to ignore.
		</p>
		<div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
			<span class="rounded bg-muted/50 px-2 py-1">Photographer</span>
			<span class="rounded bg-muted/50 px-2 py-1">Engineer</span>
			<span class="rounded bg-muted/50 px-2 py-1">Designer</span>
			<span class="rounded bg-muted/50 px-2 py-1">Programmer</span>
			<span class="rounded bg-muted/50 px-2 py-1">Animator</span>
			<span class="rounded bg-muted/50 px-2 py-1">3D Artist</span>
		</div>
	</div>

	<div class="video-container">
    {#if showVideo}
        <iframe
            src="https://player.vimeo.com/video/1099649861?h=00ba6dd0ad&dnt=1&autoplay=1"
            width="100%"
            height="100%"
            frameborder="0"
            allow="fullscreen; picture-in-picture"
            allowfullscreen
            title="Zenzak Portfolio Video"
        ></iframe>
    {:else}
        <button
            class="video-thumbnail"
            onclick={() => (showVideo = true)}
            aria-label="Play portfolio video"
        >
            <!-- Add loading state overlay -->
            {#if !imageLoaded}
                <div class="loading-placeholder">
                    <div class="loading-spinner"></div>
                </div>
            {/if}
            
            <img 
                src="/thumb.jpg" 
                alt="Portfolio showreel thumbnail" 
                class="thumbnail-image"
                class:loaded={imageLoaded}
                onload={() => (imageLoaded = true)}
            />
            
            <div class="play-button-icon" class:visible={imageLoaded}>
                <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="white" fill-opacity="0.2" />
                    <circle cx="35" cy="35" r="29" stroke="white" stroke-opacity="0.8" stroke-width="2" />
                    <path d="M49 35L28.75 47.1244L28.75 22.8756L49 35Z" fill="white" />
                </svg>
            </div>
        </button>
    {/if}
</div>

	<!-- Outcomes Grid (Product Design & Modeling first) -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">Concept Modeling & Sculpting</CardTitle>
				<CardDescription class="text-base">From sketch to clean 3D geometry.</CardDescription>
			</CardHeader>
			<CardContent class="text-base text-card-foreground">
				Rapid ideation models, hard-surface and organic sculpting, and Subdivision Surface modeling
				to solve proportions and ergonomics for confident reviews.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">High-Fidelity Surfacing & Texturing</CardTitle>
				<CardDescription class="text-base">Models ready for their close-ups.</CardDescription>
			</CardHeader>
			<CardContent class="text-base text-card-foreground">
				Clean polygonal modeling, detailed sculpting, and meticulous UV unwrapping for flawless
				texture application.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">Retopology & UV Mapping</CardTitle>
				<CardDescription class="text-base">Optimized models for any application.</CardDescription>
			</CardHeader>
			<CardContent class="text-base text-card-foreground">
				Efficient retopology for clean, animatable geometry and expert UV mapping for
				distortion-free texturing.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">CMF & Lighting Studies</CardTitle>
				<CardDescription class="text-base">Get the material story right.</CardDescription>
			</CardHeader>
			<CardContent class="text-base text-card-foreground">
				Realistic materials, texture authoring, and studio/lifestyle lighting from a photographer’s
				perspective.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">Hero Renders & Photo Composites</CardTitle>
				<CardDescription class="text-base">Centerpiece imagery that sells.</CardDescription>
			</CardHeader>
			<CardContent class="text-base text-card-foreground">
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
			<CardContent class="text-base text-card-foreground">
				Exploded views, mechanism breakdowns, and embedded 3D/AR viewers for web and trade shows.
			</CardContent>
		</Card>
	</div>
</section>

<style>
	/* --- Video Player Styles --- */
	.video-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
		aspect-ratio: 16 / 9;
		width: 100%;
		border-radius: 8px;
		overflow: hidden;
		background-color: #111; /* Fallback color */
	}

	iframe {
		width: 100%;
		height: 100%;
		border: 0;
	}

	.video-thumbnail {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0;
		border: 0;
		cursor: pointer;
	}

	.thumbnail-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: filter 0.3s ease;
	}

	.video-thumbnail:hover .thumbnail-image {
		filter: brightness(0.8);
	}

	.play-button-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 70px; /* Match the SVG viewBox width */
		height: 70px;
		pointer-events: none; /* Allows clicks to go through to the button */
		transition: transform 0.3s ease;
	}

	.video-thumbnail:hover .play-button-icon {
		transform: translate(-50%, -50%) scale(1.1);
	}
</style>
