<script>
	let showVideo = $state(false);
	  import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
  } from '$lib/components/ui/card';
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
  import { Dialog, DialogContent, DialogTrigger } from '$lib/components/ui/dialog';
  import { AspectRatio } from '$lib/components/ui/aspect-ratio';
  import Button from '$lib/components/Button.svelte';
</script>

<section class="mx-auto max-w-6xl px-4 py-16 space-y-16">
  <!-- Hero / Positioning -->
  <div class="text-center space-y-4">
    <p class="text-sm font-xl tracking-widest text-primary uppercase">Solutions</p>
    <h2 class="text-4xl md:text-5xl font-semibold text-foreground">Product Design, Modeling, and Launch‑Ready Visuals</h2>
    <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
      I’m a photographer, engineer, and designer turned 3D artist. I build detailed, high-quality models with a focus on clean topology—then light, render, and animate them so they’re impossible to ignore.
    </p>
    <div class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
      <span class="px-2 py-1 rounded bg-muted/50">Photographer’s eye</span>
      <span class="px-2 py-1 rounded bg-muted/50">Engineer’s rigor</span>
      <span class="px-2 py-1 rounded bg-muted/50">Designer’s taste</span>
      <span class="px-2 py-1 rounded bg-muted/50">Animator’s clarity</span>
    </div>
  </div>

  <!-- Outcomes Grid (Product Design & Modeling first) -->
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">Concept Modeling & Sculpting</CardTitle>
        <CardDescription class="text-base">From sketch to clean 3D geometry.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        Rapid ideation models, hard-surface and organic sculpting, and Subdivision Surface modeling to solve proportions and ergonomics for confident reviews.
      </CardContent>
    </Card>

    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">High-Fidelity Surfacing & Texturing</CardTitle>
        <CardDescription class="text-base">Models ready for their close-ups.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        Clean polygonal modeling, detailed sculpting, and meticulous UV unwrapping for flawless texture application.
      </CardContent>
    </Card>

    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">Retopology & UV Mapping</CardTitle>
        <CardDescription class="text-base">Optimized models for any application.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        Efficient retopology for clean, animatable geometry and expert UV mapping for distortion-free texturing.
      </CardContent>
    </Card>

    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">CMF & Lighting Studies</CardTitle>
        <CardDescription class="text-base">Get the material story right.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        Realistic materials, texture authoring, and studio/lifestyle lighting from a photographer’s perspective.
      </CardContent>
    </Card>

    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">Hero Renders & Photo Composites</CardTitle>
        <CardDescription class="text-base">Centerpiece imagery that sells.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        8K hero shots, transparent variants for web and print, and photo-real composites that blend real-world photography with CG precision.
      </CardContent>
    </Card>

    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">Explainers & Interactive 3D</CardTitle>
        <CardDescription class="text-base">Clarity for reviews, sales, and documentation.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        Exploded views, mechanism breakdowns, and embedded 3D/AR viewers for web and trade shows.
      </CardContent>
    </Card>
  </div>

  <!-- Deep Dives (Tabs) -->
  <div class="space-y-6 rounded-xl bg-muted/30 p-6 md:p-8">
    <h3 class="text-3xl font-semibold text-foreground">Deep dives</h3>
    <Tabs class="w-full" value="concept">
      <TabsList class="grid w-full grid-cols-2 md:grid-cols-5 bg-muted p-1.5 h-auto rounded-lg gap-1">
        <TabsTrigger value="concept" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">Concept Modeling</TabsTrigger>
        <TabsTrigger value="cad" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">Parametric CAD</TabsTrigger>
        <TabsTrigger value="dfm" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">DFM & Handoff</TabsTrigger>
        <TabsTrigger value="cmf" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">CMF & Lighting</TabsTrigger>
        <TabsTrigger value="viz" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">Renders & Interactive</TabsTrigger>
      </TabsList>

      <!-- Concept Modeling -->
      <TabsContent value="concept" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
        <Card>
          <CardContent class="p-6 space-y-4 text-base text-card-foreground">
            <h4 class="text-xl font-semibold">What it is</h4>
            <p>Turn sketches and references into clean, presentable geometry. Iterate on proportions, ergonomics, and key surfaces fast.</p>

            <h4 class="text-xl font-semibold">Deliverables</h4>
            <ul class="list-disc pl-6 space-y-1">
              <li>SubD/NURBS concept models (OBJ/FBX/STEP/IGES)</li>
              <li>Styleframes with lighting comps for stakeholder buy‑in</li>
              <li>Optional: low‑poly real‑time proxy for quick interaction</li>
            </ul>

            <h4 class="text-xl font-semibold">Great for</h4>
            <ul class="list-disc pl-6 space-y-1">
              <li>Early design reviews and board presentations</li>
              <li>Testing forms, interfaces, and CMF directions</li>
            </ul>

            <div class="pt-2 flex gap-3">
              <Button size="lg" variant="default" href="https://calendly.com/zenzak">Start a concept sprint</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- Parametric CAD -->
      <TabsContent value="cad" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
        <Card>
          <CardContent class="p-6 space-y-4 text-base text-card-foreground">
            <h4 class="text-xl font-semibold">What it is</h4>
            <p>Production‑minded CAD: clean parametric rebuilds from concepts or vendor STEP files, with assemblies, constraints, and hardware libraries.</p>

            <h4 class="text-xl font-semibold">Deliverables</h4>
            <ul class="list-disc pl-6 space-y-1">
              <li>Native CAD (SolidWorks/Fusion/Onshape) + neutral (STEP/IGES)</li>
              <li>Structured assemblies with mates, configurations, and exploded views</li>
              <li>Optional: control prints for critical interfaces</li>
            </ul>

            <h4 class="text-xl font-semibold">Notes</h4>
            <p>Geometry is organized for both manufacturing handoff and downstream visualization (UVs/instances for renders & real‑time).</p>

            <div class="pt-2">
              <Button size="lg" variant="default" href="https://calendly.com/zenzak">Scope a CAD rebuild</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- DFM & Handoff -->
      <TabsContent value="dfm" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
        <Card>
          <CardContent class="p-6 space-y-4 text-base text-card-foreground">
            <h4 class="text-xl font-semibold">What it is</h4>
            <p>A practical review to de‑risk manufacturing and accelerate quotes.</p>

            <h4 class="text-xl font-semibold">Includes</h4>
            <ul class="list-disc pl-6 space-y-1">
              <li>Drafts, wall thickness, undercuts, fasteners, clearance checks</li>
              <li>Material and process recommendations (injection molding, CNC, sheet)</li>
              <li>Handoff pack: cleaned STEP, PDF summary, vendor notes, BOM starter</li>
            </ul>

            <div class="pt-2">
              <Button size="lg" variant="default" href="https://calendly.com/zenzak">Run a DFM review</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- CMF & Lighting -->
      <TabsContent value="cmf" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
        <Card>
          <CardContent class="p-6 space-y-4 text-base text-card-foreground">
            <h4 class="text-xl font-semibold">What it is</h4>
            <p>Physically‑based material development and lighting exploration led by a photographer’s eye.</p>

            <h4 class="text-xl font-semibold">Deliverables</h4>
            <ul class="list-disc pl-6 space-y-1">
              <li>Material swatch explorations and look development boards</li>
              <li>Studio vs. lifestyle lighting kits, HDRI capture or custom rigs</li>
              <li>EXR/ACES pipeline setups for consistent cross‑platform color</li>
            </ul>

            <div class="pt-2">
              <Button size="lg" variant="default" href="https://calendly.com/zenzak">Explore CMF directions</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- Renders & Interactive -->
      <TabsContent value="viz" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
        <Card>
          <CardContent class="p-6 space-y-4 text-base text-card-foreground">
            <h4 class="text-xl font-semibold">What it is</h4>
            <p>Hero renders, explainers, and interactive viewers built from the same accurate CAD—so what you show is what you ship.</p>

            <h4 class="text-xl font-semibold">Options</h4>
            <ul class="list-disc pl-6 space-y-1">
              <li>8K hero imagery, cutdowns, transparent/alpha variants</li>
              <li>20–90s animations with exploded views and callouts</li>
              <li>Web embeds (Three.js/Threlte) with hotspots, sections, and analytics</li>
              <li>AR/WebXR exports (USDZ/GLB) with fallback images</li>
            </ul>

            <div class="flex flex-wrap gap-3 pt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="default">Preview an interactive model</Button>
                </DialogTrigger>
                <DialogContent class="max-w-4xl">
                  <AspectRatio ratio={16/9} class="rounded-md overflow-hidden">
                    <iframe
                      src="https://your-3d-demo.example.com"
                      title="Interactive 3D Demo"
                      class="w-full h-full border-0"
                      allow="xr-spatial-tracking; fullscreen; autoplay"
                    ></iframe>
                  </AspectRatio>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="secondary" href="https://calendly.com/zenzak">Plan your visuals</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>

  <!-- Packs (Integrated skills) -->
  <div class="space-y-6">
    <h3 class="text-3xl font-semibold text-foreground">Integrated packs</h3>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card class="h-full">
        <CardHeader>
          <CardTitle class="text-xl">Concept Sprint Pack</CardTitle>
          <CardDescription class="text-base">From sketch to review‑ready model in days.</CardDescription>
        </CardHeader>
        <CardContent class="text-base text-card-foreground space-y-2">
          <ul class="list-disc pl-6 space-y-1">
            <li>Concept model (SubD/NURBS) + 2 proportion passes</li>
            <li>Lighting lookframes and CMF draft</li>
            <li>Optional: interactive proxy for stakeholder reviews</li>
          </ul>
          <div class="pt-2">
            <Button size="sm" variant="default" href="https://calendly.com/zenzak">Kick off a sprint</Button>
          </div>
        </CardContent>
      </Card>

      <Card class="h-full">
        <CardHeader>
          <CardTitle class="text-xl">CAD Rebuild + DFM Pack</CardTitle>
          <CardDescription class="text-base">Clean parametric CAD, ready for quotes.</CardDescription>
        </CardHeader>
        <CardContent class="text-base text-card-foreground space-y-2">
          <ul class="list-disc pl-6 space-y-1">
            <li>Parametric rebuild + assembly structure</li>
            <li>DFM review and supplier handoff pack</li>
            <li>Exploded views and key interface callouts</li>
          </ul>
          <div class="pt-2">
            <Button size="sm" variant="default" href="https://calendly.com/zenzak">Scope your rebuild</Button>
          </div>
        </CardContent>
      </Card>

      <Card class="h-full">
        <CardHeader>
          <CardTitle class="text-xl">CMF + Launch Toolkit</CardTitle>
          <CardDescription class="text-base">Materials dialed in, visuals that ship.</CardDescription>
        </CardHeader>
        <CardContent class="text-base text-card-foreground space-y-2">
          <ul class="list-disc pl-6 space-y-1">
            <li>CMF explorations + lighting kits</li>
            <li>3 hero renders + 15s promo loop</li>
            <li>Interactive 3D viewer embed + fallbacks</li>
          </ul>
          <div class="pt-2">
            <Button size="sm" variant="default" href="https://calendly.com/zenzak">Plan your launch</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>

  <!-- Toolchain & Formats -->
  <div class="space-y-6 rounded-xl bg-muted/30 p-6 md:p-8">
    <h3 class="text-3xl font-semibold text-foreground">Toolchain & formats</h3>
    <div class="grid gap-6 md:grid-cols-3">
      <Card><CardContent class="p-4">
        <strong>CAD</strong><br/>SolidWorks, Fusion 360, Onshape<br/>STEP, IGES
      </CardContent></Card>
      <Card><CardContent class="p-4">
        <strong>Modeling & Texturing</strong><br/>Blender/SubD, Substance, retopo & UVs
      </CardContent></Card>
      <Card><CardContent class="p-4">
        <strong>Rendering & Color</strong><br/>Cycles/Octane/Redshift, ACES/EXR pipeline
      </CardContent></Card>
      <Card><CardContent class="p-4">
        <strong>Interactive</strong><br/>Three.js/Threlte, GLB/glTF (Draco/KTX2), WebXR
      </CardContent></Card>
      <Card><CardContent class="p-4">
        <strong>Photography</strong><br/>Studio lighting, HDRI capture, photo‑CG composites
      </CardContent></Card>
      <Card><CardContent class="p-4">
        <strong>Delivery</strong><br/>Native files + neutral, organized source, usage docs
      </CardContent></Card>
    </div>
  </div>

  <!-- Process -->
  <div class="space-y-4">
    <h3 class="text-3xl font-semibold text-foreground">How we’ll ship it</h3>
    <div class="grid gap-6 md:grid-cols-5">
      <Card><CardContent class="p-4"><strong>1. Discover</strong><br/>Goals, constraints, references, CAD intake.</CardContent></Card>
      <Card><CardContent class="p-4"><strong>2. Explore</strong><br/>Concept models, proportion passes, CMF directions.</CardContent></Card>
      <Card><CardContent class="p-4"><strong>3. Build</strong><br/>Parametric CAD, assemblies, and DFM review.</CardContent></Card>
      <Card><CardContent class="p-4"><strong>4. Visualize</strong><br/>Lighting, materials, hero renders, animations.</CardContent></Card>
      <Card><CardContent class="p-4"><strong>5. Launch</strong><br/>Interactive embeds, handoff packs, support.</CardContent></Card>
    </div>
  </div>

  <!-- CTA -->
  <Card class="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700">
    <CardContent class="p-8 md:p-10 space-y-4">
      <p class="text-sm uppercase tracking-widest text-slate-300">From idea to accurate model to launch‑ready visuals</p>
      <h3 class="text-3xl md:text-4xl font-semibold text-white">
        Let’s design it, model it, and show it—properly.
      </h3>
      <p class="text-lg text-slate-200 max-w-3xl">
        One partner for CAD, DFM, CMF, photography‑grade lighting, renders, animation, and interactive web delivery.
      </p>
      <div class="pt-2 flex gap-3">
        <Button size="lg" variant="default" href="https://calendly.com/zenzak">Book a consult</Button>
        <Button size="lg" variant="secondary" href="/work">See work</Button>
      </div>
    </CardContent>
  </Card>
</section>


<div class="video-container">
	{#if showVideo}
		<!-- This iframe is only rendered AFTER the click. -->
		<!-- The `&autoplay=1` parameter makes it play immediately. -->
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
		<!-- This is the clickable thumbnail that loads instantly. -->
		<button
			class="video-thumbnail"
			onclick={() => (showVideo = true)}
			aria-label="Play portfolio video"
		>
			<!-- Your local thumbnail image -->
			<img src="/thumb.jpg" alt="Portfolio showreel thumbnail" class="thumbnail-image" />
			<!-- A simple SVG play button icon -->
			<div class="play-button-icon">
				<svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="35" cy="35" r="35" fill="white" fill-opacity="0.2" />
					<circle cx="35" cy="35" r="29" stroke="white" stroke-opacity="0.8" stroke-width="2" />
					<path d="M49 35L28.75 47.1244L28.75 22.8756L49 35Z" fill="white" />
				</svg>
			</div>
		</button>
	{/if}
</div>

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
