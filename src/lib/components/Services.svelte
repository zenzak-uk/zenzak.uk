<script>
	import Card from '$lib/components/transparent/Card.svelte';
	import { CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import { Dialog, DialogContent, DialogTrigger } from '$lib/components/ui/dialog';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="mx-auto max-w-6xl space-y-16 px-4 py-16">
	<div class="space-y-4 text-center">
		<p class="font-xl text-sm tracking-widest text-primary uppercase">Our Services</p>
		<h2 class="text-4xl font-semibold text-foreground md:text-5xl">A Full‑Cycle Design Partner</h2>
		<p class="mx-auto max-w-3xl text-lg text-muted-foreground">
			From a sketch on a whiteboard to a production‑ready model—get the strategic visuals to bring
			your vision to market.
		</p>
	</div>

	<!-- Services Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">Product Visualization & Renders</CardTitle>
				<CardDescription class="text-base"
					>The definitive hero shot for decks, campaigns, and e‑commerce.</CardDescription
				>
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
				Turn intricate mechanics and internal processes into intuitive visuals that educate and
				persuade.
			</CardContent>
		</Card>

		<Card class="h-full">
			<CardHeader>
				<CardTitle class="text-xl">UI/UX & App Demonstrations</CardTitle>
				<CardDescription class="text-base"
					>Create & showcase a flawless user experience.</CardDescription
				>
			</CardHeader>
			<CardContent class="text-base text-card-foreground">
				Turn your static products into immersive web experiences. Fluid interface animations for
				promos and tutorials that drive adoption.
			</CardContent>
		</Card>
	</div>

	<!-- Solutions by audience (Tabs) -->
	<div class="space-y-8 rounded-xl bg-muted/30 p-6 md:p-8">
        <div class="space-y-2 text-center">
            <h3 class="text-3xl font-semibold text-foreground">Where I Create Value</h3>
            <p class="text-muted-foreground">Tailored solutions for different audiences</p>
        </div>
        
        <div class="grid gap-4 sm:grid-cols-2">
            <Card class="group cursor-pointer transition-all hover:shadow-lg hover:bg-background/50">
                <CardHeader class="pb-3">
                    <CardTitle class="flex items-center gap-2 text-lg">
                        <div class="rounded-lg bg-primary/10 p-2">
                            <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        For Startups
                    </CardTitle>
                </CardHeader>
                <CardContent class="pt-0">
                    <p class="text-card-foreground">
                        <strong class="text-primary">Secure Funding.</strong> Turn your pitch into an undeniable demonstration of value with a product animation that proves your concept is brilliant and ready.
                    </p>
                </CardContent>
            </Card>

            <Card class="group cursor-pointer transition-all hover:shadow-lg hover:bg-background/50">
                <CardHeader class="pb-3">
                    <CardTitle class="flex items-center gap-2 text-lg">
                        <div class="rounded-lg bg-primary/10 p-2">
                            <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                        </div>
                        For Engineering Firms
                    </CardTitle>
                </CardHeader>
                <CardContent class="pt-0">
                    <p class="text-card-foreground">
                        <strong class="text-primary">Win Bids.</strong> Eliminate ambiguity and showcase mechanism superiority with technically‑precise animations that leave no room for doubt.
                    </p>
                </CardContent>
            </Card>

            <Card class="group cursor-pointer transition-all hover:shadow-lg hover:bg-background/50">
                <CardHeader class="pb-3">
                    <CardTitle class="flex items-center gap-2 text-lg">
                        <div class="rounded-lg bg-primary/10 p-2">
                            <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        For Marketing Teams
                    </CardTitle>
                </CardHeader>
                <CardContent class="pt-0">
                    <p class="text-card-foreground">
                        <strong class="text-primary">Drive Sales.</strong> Scroll‑stopping content that turns dense features into must‑have benefits and boosts conversion.
                    </p>
                </CardContent>
            </Card>

            <Card class="group cursor-pointer transition-all hover:shadow-lg hover:bg-background/50">
                <CardHeader class="pb-3">
                    <CardTitle class="flex items-center gap-2 text-lg">
                        <div class="rounded-lg bg-primary/10 p-2">
                            <svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
                            </svg>
                        </div>
                        For Product Designers
                    </CardTitle>
                </CardHeader>
                <CardContent class="pt-0">
                    <p class="text-card-foreground">
                        <strong class="text-primary">Impress Clients.</strong> Move beyond static blueprints with photorealistic renders that showcase every detail and win fast approval.
                    </p>
                </CardContent>
            </Card>
        </div>
    </div>

	<!-- Engineering-Grade 3D Animation callout -->
	<Card class="border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
		<CardContent class="space-y-4 p-8 md:p-10">
			<p class="text-sm tracking-widest text-slate-300 uppercase">Engineering‑Grade 3D Animation</p>
			<h3 class="text-3xl font-semibold text-white md:text-4xl">
				Your vision is technically brilliant. I bridge the gap.
			</h3>
			<p class="max-w-3xl text-lg text-slate-200">
				As a mechanical engineer, I speak your language. As a 3D animator, I translate it for the
				world.
			</p>
			<div class="pt-2">
				<Button size="lg" variant="default" href="https://calendly.com/zenzak"
					>Book a consult</Button
				>
			</div>
		</CardContent>
	</Card>
</section>
