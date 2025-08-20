<script>
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
  <!-- Intro / Positioning -->
  <div class="text-center space-y-4">
    <p class="text-sm font-xl tracking-widest text-primary uppercase">Our Services</p>
    <h2 class="text-4xl md:text-5xl font-semibold text-foreground">A Full‑Cycle Design Partner</h2>
    <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
      From a sketch on a whiteboard to a production‑ready model—get the strategic visuals to bring your vision to market.
    </p>
  </div>

  <!-- Services Grid -->
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">Product Visualization & Renders</CardTitle>
        <CardDescription class="text-base">The definitive hero shot for decks, campaigns, and e‑commerce.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        Photorealistic images that demand attention and drive interest.
      </CardContent>
    </Card>

    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">Technical & Explainer Animations</CardTitle>
        <CardDescription class="text-base">Make the complex crystal‑clear.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        Turn intricate mechanics and internal processes into intuitive visuals that educate and persuade.
      </CardContent>
    </Card>

    <Card class="h-full">
      <CardHeader>
        <CardTitle class="text-xl">UI/UX & App Demonstrations</CardTitle>
        <CardDescription class="text-base">Create & showcase a flawless user experience.</CardDescription>
      </CardHeader>
      <CardContent class="text-base text-card-foreground">
        Turn your static products into immersive web experiences. Fluid interface animations for promos and tutorials that drive adoption.
      </CardContent>
    </Card>
  </div>

  <!-- Solutions by audience (Tabs) -->
<div class="space-y-6 rounded-xl bg-muted/30 p-6 md:p-8">
  <h3 class="text-3xl font-semibold text-foreground">Where I Create Value</h3>
  <Tabs class="w-full" value="startups">
    <TabsList class="grid w-full grid-cols-4 bg-muted p-1.5 h-auto rounded-lg gap-1">
  <TabsTrigger value="startups" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">For Startups</TabsTrigger>
  <TabsTrigger value="engineering" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">For Engineering Firms</TabsTrigger>
  <TabsTrigger value="marketing" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">For Marketing Teams</TabsTrigger>
  <TabsTrigger value="designers" class="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all py-3 px-4 text-sm font-xl rounded-md hover:bg-background/50">For Product Designers</TabsTrigger>
</TabsList>

    <TabsContent value="startups" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
      <Card><CardContent class="p-6 text-base text-card-foreground">
        <strong>Secure Funding.</strong> Turn your pitch into an undeniable demonstration of value with a product animation that proves your concept is brilliant and ready.
      </CardContent></Card>
    </TabsContent>

    <TabsContent value="engineering" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
      <Card><CardContent class="p-6 text-base text-card-foreground">
        <strong>Win Bids.</strong> Eliminate ambiguity and showcase mechanism superiority with technically‑precise animations that leave no room for doubt.
      </CardContent></Card>
    </TabsContent>

    <TabsContent value="marketing" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
      <Card><CardContent class="p-6 text-base text-card-foreground">
        <strong>Drive Sales.</strong> Scroll‑stopping content that turns dense features into must‑have benefits and boosts conversion.
      </CardContent></Card>
    </TabsContent>

    <TabsContent value="designers" class="mt-6 data-[state=active]:block data-[state=inactive]:hidden">
      <Card><CardContent class="p-6 text-base text-card-foreground">
        <strong>Impress Clients.</strong> Move beyond static blueprints with photorealistic renders that showcase every detail and win fast approval.
      </CardContent></Card>
    </TabsContent>
  </Tabs>
</div>

  <!-- Engineering-Grade 3D Animation callout -->
  <Card class="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700">
    <CardContent class="p-8 md:p-10 space-y-4">
      <p class="text-sm uppercase tracking-widest text-slate-300">Engineering‑Grade 3D Animation</p>
      <h3 class="text-3xl md:text-4xl font-semibold text-white">
        Your vision is technically brilliant. I bridge the gap.
      </h3>
      <p class="text-lg text-slate-200 max-w-3xl">
        As a mechanical engineer, I speak your language. As a 3D animator, I translate it for the world.
      </p>
      <div class="pt-2">
        <Button size="lg" variant="default" href="https://calendly.com/zenzak">Book a consult</Button>
      </div>
    </CardContent>
  </Card>
</section>