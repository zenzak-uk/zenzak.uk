<script>
	import SEO from '$lib/components/SEO/index.svelte';
	import { onMount } from 'svelte';
	import Scene3D from './App.svelte';

	const seoProps = {
		title: 'Purposeful 3D Web Experiences',
		metadescription:
			"Explore interactive 3D web capabilities with Zenzak's engineering-grade approach to web-based 3D visualization and user experiences."
	};

	let performanceMetrics = $state({
		fps: 60,
		loadTime: '2.3s',
		triangles: '12.5K',
		drawCalls: '8'
	});

	onMount(() => {
		// Simple FPS counter simulation
		let lastTime = performance.now();
		let frameCount = 0;

		const updateFPS = () => {
			frameCount++;
			const currentTime = performance.now();
			if (currentTime - lastTime >= 1000) {
				performanceMetrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
				frameCount = 0;
				lastTime = currentTime;
			}
			requestAnimationFrame(updateFPS);
		};
		updateFPS();
	});
</script>

<SEO {...seoProps} />

<div class="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900">
	<!-- Interactive Hero Section -->
	<section class="relative flex h-screen items-center justify-center overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5">
			<!-- Animated floating shapes as placeholder for 3D scene -->
			<Scene3D />
		</div>

		<div class="relative z-10 text-center text-white">
			<h1
				class="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-6xl font-bold text-transparent"
			>
				Purposeful 3D Web
			</h1>
			<p class="mx-auto mb-8 max-w-2xl text-xl leading-relaxed">
				Engineering-grade 3D experiences that drive engagement, understanding, and conversion
			</p>

			<!-- Performance Metrics -->
			<div class="mb-8 flex justify-center gap-6">
				<div class="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
					<div class="text-2xl font-bold text-green-400">{performanceMetrics.fps}</div>
					<div class="text-sm text-gray-300">FPS</div>
				</div>
				<div class="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
					<div class="text-2xl font-bold text-blue-400">{performanceMetrics.loadTime}</div>
					<div class="text-sm text-gray-300">Load Time</div>
				</div>
				<div class="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
					<div class="text-2xl font-bold text-purple-400">{performanceMetrics.triangles}</div>
					<div class="text-sm text-gray-300">Triangles</div>
				</div>
				<div class="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
					<div class="text-2xl font-bold text-orange-400">{performanceMetrics.drawCalls}</div>
					<div class="text-sm text-gray-300">Draw Calls</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Capability Demonstrations -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-4xl font-bold text-white">3D Web Capabilities</h2>

			<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
				<!-- Product Visualization -->
				<div
					class="relative rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
				>
					<div class="mb-4">
						<h3 class="mb-2 text-xl font-semibold text-white">Product Visualization</h3>
						<p class="text-sm leading-relaxed text-gray-300">
							Interactive 3D models with material switching and dynamic lighting for e-commerce and
							marketing.
						</p>
					</div>

					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="rounded bg-white/10 px-2 py-1">FPS: 60</span>
						<span class="rounded bg-white/10 px-2 py-1">Load Time: 1.2s</span>
						<span class="rounded bg-white/10 px-2 py-1">File Size: 2.1MB</span>
					</div>

					<div
						class="relative mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-indigo-900 to-purple-900"
					>
						<!-- Rotating cube placeholder -->
						<div
							class="h-24 w-24 rotate-45 transform animate-spin border-4 border-blue-400/50"
						></div>
						<div class="absolute right-4 bottom-4 text-xs text-gray-400">
							Product Configurator Demo
						</div>
					</div>

					<details class="mt-4">
						<summary class="cursor-pointer text-sm text-gray-400 hover:text-white"
							>View Code</summary
						>
						<pre class="mt-2 overflow-x-auto rounded bg-black/40 p-3 text-xs text-gray-300"><code
								>&lt;Scene&gt;
  &lt;Camera position=&#123;[5, 5, 5]&#125; /&gt;
  &lt;Lighting /&gt;
  &lt;Controls /&gt;
  &lt;ProductConfigurator color="#4f46e5" /&gt;
&lt;/Scene&gt;</code
							></pre>
					</details>
				</div>

				<!-- Spatial Navigation -->
				<div
					class="relative rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
				>
					<div class="mb-4">
						<h3 class="mb-2 text-xl font-semibold text-white">Spatial Navigation</h3>
						<p class="text-sm leading-relaxed text-gray-300">
							Immersive architectural walkthroughs and spatial experiences for real estate and
							design.
						</p>
					</div>

					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="rounded bg-white/10 px-2 py-1">FPS: 58</span>
						<span class="rounded bg-white/10 px-2 py-1">Load Time: 2.1s</span>
						<span class="rounded bg-white/10 px-2 py-1">Models: 5</span>
					</div>

					<div
						class="relative mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-gray-900 to-slate-800"
					>
						<!-- Floating spheres placeholder -->
						<div class="relative">
							<div class="h-6 w-6 animate-bounce rounded-full bg-pink-400/60"></div>
							<div
								class="absolute top-4 left-8 h-4 w-4 animate-bounce rounded-full bg-pink-300/40 delay-150"
							></div>
							<div
								class="absolute -top-2 left-4 h-5 w-5 animate-bounce rounded-full bg-pink-500/50 delay-300"
							></div>
						</div>
						<div class="absolute right-4 bottom-4 text-xs text-gray-400">
							Architectural Walkthrough
						</div>
					</div>

					<details class="mt-4">
						<summary class="cursor-pointer text-sm text-gray-400 hover:text-white"
							>View Code</summary
						>
						<pre class="mt-2 overflow-x-auto rounded bg-black/40 p-3 text-xs text-gray-300"><code
								>&lt;Scene&gt;
  &lt;Camera position=&#123;[10, 5, 10]&#125; /&gt;
  &lt;Lighting ambientIntensity=&#123;0.6&#125; /&gt;
  &lt;Controls enablePan=&#123;true&#125; /&gt;
  &lt;ArchitecturalWalkthrough /&gt;
&lt;/Scene&gt;</code
							></pre>
					</details>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<!-- Real-time Rendering -->
				<div
					class="relative rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
				>
					<div class="mb-4">
						<h3 class="mb-2 text-xl font-semibold text-white">Real-time Rendering</h3>
						<p class="text-sm leading-relaxed text-gray-300">
							Dynamic shader effects and lighting changes that respond to user interaction.
						</p>
					</div>

					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="rounded bg-white/10 px-2 py-1">FPS: 60</span>
						<span class="rounded bg-white/10 px-2 py-1">GPU Usage: 45%</span>
						<span class="rounded bg-white/10 px-2 py-1">Memory: 128MB</span>
					</div>

					<div
						class="relative mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
					>
						<!-- Color-changing sphere -->
						<div
							class="h-20 w-20 animate-pulse rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
						></div>
						<div class="absolute right-4 bottom-4 text-xs text-gray-400">Shader Playground</div>
					</div>

					<details class="mt-4">
						<summary class="cursor-pointer text-sm text-gray-400 hover:text-white"
							>View Code</summary
						>
						<pre class="mt-2 overflow-x-auto rounded bg-black/40 p-3 text-xs text-gray-300"><code
								>&lt;Scene&gt;
  &lt;Camera /&gt;
  &lt;Lighting directionalIntensity=&#123;1.5&#125; /&gt;
  &lt;ShaderPlayground /&gt;
&lt;/Scene&gt;</code
							></pre>
					</details>
				</div>

				<!-- Physics Integration -->
				<div
					class="relative rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
				>
					<div class="mb-4">
						<h3 class="mb-2 text-xl font-semibold text-white">Physics Integration</h3>
						<p class="text-sm leading-relaxed text-gray-300">
							Interactive physics simulations for product demonstrations and educational content.
						</p>
					</div>

					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="rounded bg-white/10 px-2 py-1">FPS: 55</span>
						<span class="rounded bg-white/10 px-2 py-1">Physics Objects: 8</span>
						<span class="rounded bg-white/10 px-2 py-1">Collisions: Active</span>
					</div>

					<div
						class="relative mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-slate-800 to-gray-900"
					>
						<!-- Bouncing objects -->
						<div class="relative">
							<div class="h-8 w-8 animate-bounce bg-red-500"></div>
							<div
								class="absolute top-0 left-12 h-6 w-6 animate-pulse rounded-full bg-blue-500"
							></div>
						</div>
						<div class="absolute right-0 bottom-0 left-0 h-2 bg-gray-600"></div>
						<div class="absolute right-4 bottom-4 text-xs text-gray-400">Physics Demo</div>
					</div>

					<details class="mt-4">
						<summary class="cursor-pointer text-sm text-gray-400 hover:text-white"
							>View Code</summary
						>
						<pre class="mt-2 overflow-x-auto rounded bg-black/40 p-3 text-xs text-gray-300"><code
								>&lt;Scene&gt;
  &lt;Camera position=&#123;[8, 5, 8]&#125; /&gt;
  &lt;Lighting castShadows=&#123;true&#125; /&gt;
  &lt;PhysicsDemo /&gt;
&lt;/Scene&gt;</code
							></pre>
					</details>
				</div>
			</div>
		</div>
	</section>

	<!-- Additional Demonstrations -->
	<section class="bg-black/20 px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-white">Advanced 3D Techniques</h2>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<!-- Particle Systems -->
				<div
					class="relative rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
				>
					<div class="mb-4">
						<h3 class="mb-2 text-xl font-semibold text-white">Particle Systems</h3>
						<p class="text-sm leading-relaxed text-gray-300">
							Complex particle effects for environmental storytelling and brand experiences.
						</p>
					</div>

					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="rounded bg-white/10 px-2 py-1">Particles: 100</span>
						<span class="rounded bg-white/10 px-2 py-1">FPS: 60</span>
						<span class="rounded bg-white/10 px-2 py-1">GPU Instancing: Yes</span>
					</div>

					<div
						class="relative mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-gray-900 to-black"
					>
						<!-- Particle effect simulation -->
						<div class="grid grid-cols-8 gap-1">
							{#each Array(32) as _, i}
								<div
									class="h-1 w-1 animate-ping rounded-full bg-green-400"
									style="animation-delay: {i * 50}ms;"
								></div>
							{/each}
						</div>
						<div class="absolute right-4 bottom-4 text-xs text-gray-400">Particle System</div>
					</div>
				</div>

				<!-- Animation Sequences -->
				<div
					class="relative rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
				>
					<div class="mb-4">
						<h3 class="mb-2 text-xl font-semibold text-white">Animation Sequences</h3>
						<p class="text-sm leading-relaxed text-gray-300">
							Orchestrated animation sequences for product launches and brand storytelling.
						</p>
					</div>

					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="rounded bg-white/10 px-2 py-1">Keyframes: 240</span>
						<span class="rounded bg-white/10 px-2 py-1">FPS: 60</span>
						<span class="rounded bg-white/10 px-2 py-1">Easing: Custom</span>
					</div>

					<div
						class="relative mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-indigo-900 to-purple-900"
					>
						<!-- Sequential animation -->
						<div class="flex gap-1">
							{#each Array(8) as _, i}
								<div
									class="h-8 w-3 animate-bounce bg-gradient-to-t from-blue-500 to-purple-400"
									style="animation-delay: {i * 100}ms;"
								></div>
							{/each}
						</div>
						<div class="absolute right-4 bottom-4 text-xs text-gray-400">Animation Sequence</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Technical Deep-Dive -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl text-white">
			<h2 class="mb-12 text-center text-4xl font-bold">Technical Implementation</h2>

			<div class="prose max-w-none prose-invert">
				<h3 class="mb-4 text-2xl font-semibold">Svelte + Threlte Integration</h3>
				<p class="mb-6 text-gray-300">
					Our 3D experiences are built on a foundation of performance-first engineering. Using
					SvelteKit with Threlte (Three.js for Svelte), we achieve optimal bundle sizes and
					lightning-fast load times without sacrificing visual fidelity.
				</p>

				<div class="mb-8 rounded-lg bg-gray-900/50 p-6">
					<pre class="overflow-x-auto text-sm text-gray-300"><code
							>// Base Scene Component
import &#123; Canvas &#125; from '@threlte/core';

let &#123; background = '#040b14', fog = true, shadows = true, children &#125; = $props();

&lt;Canvas &#123;background&#125;&gt;
  &#123;@render children?.()&#125;
&lt;/Canvas&gt;</code
						></pre>
				</div>

				<h3 class="mb-4 text-2xl font-semibold">Performance Optimization</h3>
				<ul class="mb-6 space-y-2 text-gray-300">
					<li>• <strong>GLTF Models:</strong> Optimized 3D assets with compression</li>
					<li>• <strong>Level of Detail (LOD):</strong> Distance-based quality scaling</li>
					<li>• <strong>Frustum Culling:</strong> Automatic off-screen object removal</li>
					<li>• <strong>Web Workers:</strong> Heavy computations off the main thread</li>
					<li>• <strong>Progressive Loading:</strong> Staged asset delivery</li>
				</ul>

				<h3 class="mb-4 text-2xl font-semibold">Asset Pipeline</h3>
				<p class="mb-6 text-gray-300">
					We rebuild CAD models in Blender specifically for web performance, using efficient
					topology and web-native formats. Our pipeline ensures every polygon serves a purpose,
					every texture is optimized, and every animation is smooth.
				</p>
			</div>

			<div class="mt-12 text-center">
				<a
					href="/contact"
					class="inline-block transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
				>
					Start Your 3D Web Project
				</a>
			</div>
		</div>
	</section>
</div>
