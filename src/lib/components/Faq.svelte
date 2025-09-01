<!-- src/lib/components/Faq.svelte -->
<script>
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import { Separator } from '$lib/components/ui/separator';
	import Button from '$lib/components/Button.svelte';
	import { Sparkles, Cog, DollarSign, Clock } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-3xl space-y-8 md:max-w-5xl">
	<div class="space-y-1 text-center md:text-left">
		<h3 class="text-2xl font-semibold tracking-tight md:text-3xl">
			A straightforward process is key.
		</h3>
		<p class="text-muted-foreground">Here’s what you can expect.</p>
	</div>

	<Accordion type="single" collapsible class="space-y-4">
		<AccordionItem
			value="benefit"
			class="group bg-card/60 rounded-xl border shadow-sm backdrop-blur-sm transition-all hover:shadow-md data-[state=open]:shadow-lg"
		>
			<AccordionTrigger class="px-5 py-4">
				<div class="flex items-center gap-3">
					<Sparkles class="text-primary h-5 w-5" />
					<span class="text-left font-medium">
						What's the benefit of hiring an engineer to do this?
					</span>
				</div>
			</AccordionTrigger>
			<AccordionContent class="text-muted-foreground px-5 pb-5">
				<p>
					<strong class="text-foreground">Efficiency.</strong> I understand your CAD files, schematics,
					and technical language from the start. This eliminates misinterpretation and drastically reduces
					revision cycles, getting you to a perfect final product faster.
				</p>
			</AccordionContent>
		</AccordionItem>

		<AccordionItem
			value="process"
			class="group bg-card/60 rounded-xl border shadow-sm backdrop-blur-sm transition-all hover:shadow-md data-[state=open]:shadow-lg"
		>
			<AccordionTrigger class="px-5 py-4">
				<div class="flex items-center gap-3">
					<Cog class="text-primary h-5 w-5" />
					<span class="text-left font-medium">What is your process?</span>
				</div>
			</AccordionTrigger>
			<AccordionContent class="px-5 pb-6">
				<ol class="relative ml-2 space-y-6 border-l pl-8">
					<li class="relative">
						<span
							class="bg-primary ring-background absolute top-1.5 -left-[13px] h-2.5 w-2.5 rounded-full ring-4"
						></span>
						<p class="text-foreground">
							<strong>Discovery &amp; Strategy:</strong> A quick call to align on your commercial goals
							and technical details.
						</p>
					</li>
					<li class="relative">
						<span
							class="bg-primary ring-background absolute top-1.5 -left-[13px] h-2.5 w-2.5 rounded-full ring-4"
						></span>
						<p class="text-foreground">
							<strong>Creation &amp; Review:</strong> I build the animation with key milestones for your
							feedback and approval.
						</p>
					</li>
					<li class="relative">
						<span
							class="bg-primary ring-background absolute top-1.5 -left-[13px] h-2.5 w-2.5 rounded-full ring-4"
						></span>
						<p class="text-foreground">
							<strong>Delivery:</strong> You receive the final, high-impact animation, ready for deployment.
						</p>
					</li>
				</ol>
			</AccordionContent>
		</AccordionItem>

		<AccordionItem
			value="cost"
			class="group bg-card/60 rounded-xl border shadow-sm backdrop-blur-sm transition-all hover:shadow-md data-[state=open]:shadow-lg"
		>
			<AccordionTrigger class="px-5 py-4">
				<div class="flex items-center gap-3">
					<DollarSign class="text-primary h-5 w-5" />
					<span class="text-left font-medium">How much does a project cost?</span>
				</div>
			</AccordionTrigger>
			<AccordionContent class="text-muted-foreground px-5 pb-5">
				<p>
					Every project is custom-quoted to fit its specific goals. After our call, you'll receive a
					detailed, transparent quote. No hidden fees, no surprises. Just exceptional results.
				</p>
			</AccordionContent>
		</AccordionItem>

		<AccordionItem
			value="timeline"
			class="group bg-card/60 rounded-xl border shadow-sm backdrop-blur-sm transition-all hover:shadow-md data-[state=open]:shadow-lg"
		>
			<AccordionTrigger class="px-5 py-4">
				<div class="flex items-center gap-3">
					<Clock class="text-primary h-5 w-5" />
					<span class="text-left font-medium">How long will it take?</span>
				</div>
			</AccordionTrigger>
			<AccordionContent class="text-muted-foreground px-5 pb-5">
				<p>
					Most projects are delivered in 1-3 weeks. Your quote will include a reliable timeline. If
					you have an urgent deadline, let's discuss it.
				</p>
			</AccordionContent>
		</AccordionItem>
		<Separator />
	</Accordion>

	<section>
		<h4 semibold>Still have a question?</h4>
		<Button href="/contact">Let's talk</Button>
	</section>
</div>
