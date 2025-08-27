<script>
	import SEO from '$lib/components/SEO/index.svelte';
	import { onMount } from 'svelte';
	import Scene3D from './App.svelte'

	const seoProps = {
		title: 'Purposeful 3D Web Experiences',
		metadescription: 'Explore interactive 3D web capabilities with Zenzak\'s engineering-grade approach to web-based 3D visualization and user experiences.'
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
				performanceMetrics.fps = Math.round(frameCount * 1000 / (currentTime - lastTime));
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
	<section class="relative h-screen flex items-center justify-center overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5">
			<!-- Animated floating shapes as placeholder for 3D scene -->
			  <Scene3D />

		</div>
		
		<div class="relative z-10 text-center text-white">
			<h1 class="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
				Purposeful 3D Web
			</h1>
			<p class="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
				Engineering-grade 3D experiences that drive engagement, understanding, and conversion
			</p>
			
			<!-- Performance Metrics -->
			<div class="flex justify-center gap-6 mb-8">
				<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
					<div class="text-2xl font-bold text-green-400">{performanceMetrics.fps}</div>
					<div class="text-sm text-gray-300">FPS</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
					<div class="text-2xl font-bold text-blue-400">{performanceMetrics.loadTime}</div>
					<div class="text-sm text-gray-300">Load Time</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
					<div class="text-2xl font-bold text-purple-400">{performanceMetrics.triangles}</div>
					<div class="text-sm text-gray-300">Triangles</div>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
					<div class="text-2xl font-bold text-orange-400">{performanceMetrics.drawCalls}</div>
					<div class="text-sm text-gray-300">Draw Calls</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Capability Demonstrations -->
	<section class="py-20 px-6">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-4xl font-bold text-white text-center mb-12">
				3D Web Capabilities
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<!-- Product Visualization -->
				<div class="relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg">
					<div class="mb-4">
						<h3 class="text-xl font-semibold text-white mb-2">Product Visualization</h3>
						<p class="text-gray-300 text-sm leading-relaxed">Interactive 3D models with material switching and dynamic lighting for e-commerce and marketing.</p>
					</div>
					
					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="bg-white/10 px-2 py-1 rounded">FPS: 60</span>
						<span class="bg-white/10 px-2 py-1 rounded">Load Time: 1.2s</span>
						<span class="bg-white/10 px-2 py-1 rounded">File Size: 2.1MB</span>
					</div>
					
					<div class="relative aspect-video mb-4 rounded-md overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
						<!-- Rotating cube placeholder -->
						<div class="w-24 h-24 border-4 border-blue-400/50 transform rotate-45 animate-spin"></div>
						<div class="absolute bottom-4 right-4 text-xs text-gray-400">Product Configurator Demo</div>
					</div>
					
					<details class="mt-4">
						<summary class="text-sm text-gray-400 cursor-pointer hover:text-white">View Code</summary>
						<pre class="mt-2 p-3 bg-black/40 rounded text-xs overflow-x-auto text-gray-300"><code>&lt;Scene&gt;
  &lt;Camera position=&#123;[5, 5, 5]&#125; /&gt;
  &lt;Lighting /&gt;
  &lt;Controls /&gt;
  &lt;ProductConfigurator color="#4f46e5" /&gt;
&lt;/Scene&gt;</code></pre>
					</details>
				</div>
				
				<!-- Spatial Navigation -->
				<div class="relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg">
					<div class="mb-4">
						<h3 class="text-xl font-semibold text-white mb-2">Spatial Navigation</h3>
						<p class="text-gray-300 text-sm leading-relaxed">Immersive architectural walkthroughs and spatial experiences for real estate and design.</p>
					</div>
					
					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="bg-white/10 px-2 py-1 rounded">FPS: 58</span>
						<span class="bg-white/10 px-2 py-1 rounded">Load Time: 2.1s</span>
						<span class="bg-white/10 px-2 py-1 rounded">Models: 5</span>
					</div>
					
					<div class="relative aspect-video mb-4 rounded-md overflow-hidden bg-gradient-to-br from-gray-900 to-slate-800 flex items-center justify-center">
						<!-- Floating spheres placeholder -->
						<div class="relative">
							<div class="w-6 h-6 bg-pink-400/60 rounded-full animate-bounce"></div>
							<div class="absolute top-4 left-8 w-4 h-4 bg-pink-300/40 rounded-full animate-bounce delay-150"></div>
							<div class="absolute -top-2 left-4 w-5 h-5 bg-pink-500/50 rounded-full animate-bounce delay-300"></div>
						</div>
						<div class="absolute bottom-4 right-4 text-xs text-gray-400">Architectural Walkthrough</div>
					</div>
					
					<details class="mt-4">
						<summary class="text-sm text-gray-400 cursor-pointer hover:text-white">View Code</summary>
						<pre class="mt-2 p-3 bg-black/40 rounded text-xs overflow-x-auto text-gray-300"><code>&lt;Scene&gt;
  &lt;Camera position=&#123;[10, 5, 10]&#125; /&gt;
  &lt;Lighting ambientIntensity=&#123;0.6&#125; /&gt;
  &lt;Controls enablePan=&#123;true&#125; /&gt;
  &lt;ArchitecturalWalkthrough /&gt;
&lt;/Scene&gt;</code></pre>
					</details>
				</div>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- Real-time Rendering -->
				<div class="relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg">
					<div class="mb-4">
						<h3 class="text-xl font-semibold text-white mb-2">Real-time Rendering</h3>
						<p class="text-gray-300 text-sm leading-relaxed">Dynamic shader effects and lighting changes that respond to user interaction.</p>
					</div>
					
					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="bg-white/10 px-2 py-1 rounded">FPS: 60</span>
						<span class="bg-white/10 px-2 py-1 rounded">GPU Usage: 45%</span>
						<span class="bg-white/10 px-2 py-1 rounded">Memory: 128MB</span>
					</div>
					
					<div class="relative aspect-video mb-4 rounded-md overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
						<!-- Color-changing sphere -->
						<div class="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse"></div>
						<div class="absolute bottom-4 right-4 text-xs text-gray-400">Shader Playground</div>
					</div>
					
					<details class="mt-4">
						<summary class="text-sm text-gray-400 cursor-pointer hover:text-white">View Code</summary>
						<pre class="mt-2 p-3 bg-black/40 rounded text-xs overflow-x-auto text-gray-300"><code>&lt;Scene&gt;
  &lt;Camera /&gt;
  &lt;Lighting directionalIntensity=&#123;1.5&#125; /&gt;
  &lt;ShaderPlayground /&gt;
&lt;/Scene&gt;</code></pre>
					</details>
				</div>
				
				<!-- Physics Integration -->
				<div class="relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg">
					<div class="mb-4">
						<h3 class="text-xl font-semibold text-white mb-2">Physics Integration</h3>
						<p class="text-gray-300 text-sm leading-relaxed">Interactive physics simulations for product demonstrations and educational content.</p>
					</div>
					
					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="bg-white/10 px-2 py-1 rounded">FPS: 55</span>
						<span class="bg-white/10 px-2 py-1 rounded">Physics Objects: 8</span>
						<span class="bg-white/10 px-2 py-1 rounded">Collisions: Active</span>
					</div>
					
					<div class="relative aspect-video mb-4 rounded-md overflow-hidden bg-gradient-to-br from-slate-800 to-gray-900 flex items-center justify-center">
						<!-- Bouncing objects -->
						<div class="relative">
							<div class="w-8 h-8 bg-red-500 animate-bounce"></div>
							<div class="absolute top-0 left-12 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
						</div>
						<div class="absolute bottom-0 left-0 right-0 h-2 bg-gray-600"></div>
						<div class="absolute bottom-4 right-4 text-xs text-gray-400">Physics Demo</div>
					</div>
					
					<details class="mt-4">
						<summary class="text-sm text-gray-400 cursor-pointer hover:text-white">View Code</summary>
						<pre class="mt-2 p-3 bg-black/40 rounded text-xs overflow-x-auto text-gray-300"><code>&lt;Scene&gt;
  &lt;Camera position=&#123;[8, 5, 8]&#125; /&gt;
  &lt;Lighting castShadows=&#123;true&#125; /&gt;
  &lt;PhysicsDemo /&gt;
&lt;/Scene&gt;</code></pre>
					</details>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Additional Demonstrations -->
	<section class="py-20 px-6 bg-black/20">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-white text-center mb-12">
				Advanced 3D Techniques
			</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- Particle Systems -->
				<div class="relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg">
					<div class="mb-4">
						<h3 class="text-xl font-semibold text-white mb-2">Particle Systems</h3>
						<p class="text-gray-300 text-sm leading-relaxed">Complex particle effects for environmental storytelling and brand experiences.</p>
					</div>
					
					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="bg-white/10 px-2 py-1 rounded">Particles: 100</span>
						<span class="bg-white/10 px-2 py-1 rounded">FPS: 60</span>
						<span class="bg-white/10 px-2 py-1 rounded">GPU Instancing: Yes</span>
					</div>
					
					<div class="relative aspect-video mb-4 rounded-md overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
						<!-- Particle effect simulation -->
						<div class="grid grid-cols-8 gap-1">
							{#each Array(32) as _, i}
								<div class="w-1 h-1 bg-green-400 rounded-full animate-ping" style="animation-delay: {i * 50}ms;"></div>
							{/each}
						</div>
						<div class="absolute bottom-4 right-4 text-xs text-gray-400">Particle System</div>
					</div>
				</div>
				
				<!-- Animation Sequences -->
				<div class="relative rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg">
					<div class="mb-4">
						<h3 class="text-xl font-semibold text-white mb-2">Animation Sequences</h3>
						<p class="text-gray-300 text-sm leading-relaxed">Orchestrated animation sequences for product launches and brand storytelling.</p>
					</div>
					
					<div class="mb-4 flex gap-4 text-xs text-gray-400">
						<span class="bg-white/10 px-2 py-1 rounded">Keyframes: 240</span>
						<span class="bg-white/10 px-2 py-1 rounded">FPS: 60</span>
						<span class="bg-white/10 px-2 py-1 rounded">Easing: Custom</span>
					</div>
					
					<div class="relative aspect-video mb-4 rounded-md overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
						<!-- Sequential animation -->
						<div class="flex gap-1">
							{#each Array(8) as _, i}
								<div 
									class="w-3 h-8 bg-gradient-to-t from-blue-500 to-purple-400 animate-bounce" 
									style="animation-delay: {i * 100}ms;"
								></div>
							{/each}
						</div>
						<div class="absolute bottom-4 right-4 text-xs text-gray-400">Animation Sequence</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Technical Deep-Dive -->
	<section class="py-20 px-6">
		<div class="max-w-4xl mx-auto text-white">
			<h2 class="text-4xl font-bold text-center mb-12">
				Technical Implementation
			</h2>
			
			<div class="prose prose-invert max-w-none">
				<h3 class="text-2xl font-semibold mb-4">Svelte + Threlte Integration</h3>
				<p class="text-gray-300 mb-6">
					Our 3D experiences are built on a foundation of performance-first engineering. 
					Using SvelteKit with Threlte (Three.js for Svelte), we achieve optimal bundle sizes 
					and lightning-fast load times without sacrificing visual fidelity.
				</p>
				
				<div class="bg-gray-900/50 rounded-lg p-6 mb-8">
					<pre class="text-sm text-gray-300 overflow-x-auto"><code>// Base Scene Component
import &#123; Canvas &#125; from '@threlte/core';

let &#123; background = '#040b14', fog = true, shadows = true, children &#125; = $props();

&lt;Canvas &#123;background&#125;&gt;
  &#123;@render children?.()&#125;
&lt;/Canvas&gt;</code></pre>
				</div>
				
				<h3 class="text-2xl font-semibold mb-4">Performance Optimization</h3>
				<ul class="text-gray-300 space-y-2 mb-6">
					<li>• <strong>GLTF Models:</strong> Optimized 3D assets with compression</li>
					<li>• <strong>Level of Detail (LOD):</strong> Distance-based quality scaling</li>
					<li>• <strong>Frustum Culling:</strong> Automatic off-screen object removal</li>
					<li>• <strong>Web Workers:</strong> Heavy computations off the main thread</li>
					<li>• <strong>Progressive Loading:</strong> Staged asset delivery</li>
				</ul>
				
				<h3 class="text-2xl font-semibold mb-4">Asset Pipeline</h3>
				<p class="text-gray-300 mb-6">
					We rebuild CAD models in Blender specifically for web performance, using 
					efficient topology and web-native formats. Our pipeline ensures every polygon 
					serves a purpose, every texture is optimized, and every animation is smooth.
				</p>
			</div>
			
			<div class="text-center mt-12">
				<a 
					href="/contact" 
					class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
				>
					Start Your 3D Web Project
				</a>
			</div>
		</div>
	</section>
</div>