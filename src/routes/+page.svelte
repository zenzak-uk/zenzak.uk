<script>
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import { base } from '$app/paths';
	import Header from '$lib/components/Header.svelte';
	import Solutions from '$lib/components/Solutions.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import Footer from '$lib/components/Footer.svelte';
	import Software from '$lib/components/Software.svelte';
	import Offering from '$lib/components/Offering.svelte';

	import { gsap } from 'gsap';

	import SEO from '$lib/components/SEO/index.svelte';
	const seoProps = {
		title: "Edinburgh's design, visualisation, and animation studio",
		metadescription:
			"Zenzak Studio is Edinburgh's independent visualisation studio. 3D animation, product visualisation, and design services to bring your vision to life."
	};

	let videoElement;

	onMount(() => {
		const words = gsap.utils.toArray('.rotator-word');
		const container = document.querySelector('.rotator-container');

		// Set perspective on the container for the 3D effect
		gsap.set(container, { perspective: 400 });

		const tl = gsap.timeline({
			repeat: -1
		});

		words.forEach((word) => {
			tl.fromTo(
				word,
				{
					rotationX: -90,
					autoAlpha: 0,
					y: -50
				},
				{
					rotationX: 0,
					autoAlpha: 1,
					y: 0,
					duration: 0.4,
					ease: 'power2.out'
				}
			).to(
				word,
				{
					rotationX: 90,
					autoAlpha: 0,
					y: -50,
					duration: 0.4,
					ease: 'power2.in'
				},
				'+=1'
			);
		});

		// Video autoplay fallback
		if (videoElement) {
			const playVideo = async () => {
				try {
					await videoElement.play();
					console.log('Video playing successfully');
				} catch (err) {
					console.log('Autoplay blocked:', err);
				}
			};

			// Wait for video to be ready
			const handleCanPlay = () => {
				playVideo();
			};

			if (videoElement.readyState >= 3) {
				// Video already loaded
				playVideo();
			} else {
				// Wait for video to load
				videoElement.addEventListener('canplay', handleCanPlay, { once: true });
			}

			// Retry on user interaction if blocked
			const handleInteraction = () => {
				playVideo();
			};

			document.addEventListener('click', handleInteraction, { once: true });
			document.addEventListener('touchstart', handleInteraction, { once: true });

			// Cleanup
			return () => {
				videoElement.removeEventListener('canplay', handleCanPlay);
			};
		}
	});
</script>

<SEO {...seoProps} />

<Header></Header>

<div
	class="relative flex min-h-dvh flex-col items-stretch overflow-hidden"
	style="--poster-url: url({base}/videos/poster.avif)"
>
	<main>
		<section id="hero" class="section pt-12 text-slate-200">
			<div class="mx-auto flex h-full flex-col py-4 lg:py-10">
				<div
					class="relative flex flex-1 flex-col justify-around rounded-lg pt-20 pb-10 lg:rounded-2xl"
				>
					<div class="flex justify-center">
						<h1
							class="font-display text-center text-5xl font-extrabold uppercase sm:text-7xl md:text-8xl lg:text-9xl"
						>
							<span>We Create</span>
							<span
								class="rotator-container relative inline-flex h-20 w-full justify-center overflow-hidden px-8 md:h-24 lg:h-32"
							>
								<span class="rotator-word absolute">Visuals</span>
								<span class="rotator-word absolute">Animations</span>
								<span class="rotator-word absolute">Renders</span>
								<span class="rotator-word absolute">Demos</span>
							</span>
						</h1>
					</div>
					<div class="flex flex-col items-center gap-5 text-center lg:gap-10">
						<p class="mt-8 max-w-3xl font-mono font-semibold lg:text-lg">
							We're Edinburgh's design, visualization, and animation studio that makes the innovative
							understandable. We partner with you to create stunning visuals that captivate
							audiences and get you market-ready. See your vision take shape. Schedule a free
							consultation.
						</p>
						<div class="flex flex-col items-center justify-center gap-3 lg:col-start-1">
							<div
								class="squircle-bg rounded-lg bg-zinc-900"
								data-cursor-hover
								data-cursor-parallax
							>
								<a
									class="flex h-10 w-full max-w-52 flex-1 items-center justify-center px-4 py-2 text-xl text-slate-200 transition-all hover:text-white sm:w-auto md:font-bold lg:h-10"
									aria-label="Contact Page"
									href="/contact/"
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="mx-auto max-w-6xl px-4">
			<VideoPlayer
				videoUrl="https://player.vimeo.com/video/1099649861?h=00ba6dd0ad&dnt=1&autoplay=1"
				thumbnailUrl="/images/thumb.jpg"
				title="Zenzak Portfolio Video"
				thumbnailAlt="Portfolio showreel thumbnail"
			/>
		</section>
		<section>
			<Software></Software>
		</section>
		<section>
			<Offering></Offering>
		</section>
	</main>
	<div class="fixed top-0 left-0 z-[-1] h-full w-full">
		<video
			bind:this={videoElement}
			muted
			loop
			playsinline
			poster="{base}/videos/poster.avif"
			class="!min-h-full w-full object-cover"
		>
			<source src="{base}/videos/bg.webm" type="video/webm" />
			<source src="{base}/videos/bg.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div
			class="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.8)_70%)]"
		></div>
	</div>
</div>

<Footer></Footer>

<style>
	.rotator-word {
		opacity: 0;
		visibility: hidden;
	}
</style>
