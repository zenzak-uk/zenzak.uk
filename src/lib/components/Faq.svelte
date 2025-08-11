<!-- src/lib/components/Faq.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/Button.svelte';

	const dispatch = createEventDispatcher();

	function switchToContact() {
		// Dispatch a custom event named 'switchmodal'
		// and pass the name of the target modal ('contact') as the data.
		dispatch('switchmodal', 'contact');
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/src/lib/styles/content.css" />
</svelte:head>

<div class="content-wrapper">
	<h2>FREQUENTLY ASKED QUESTIONS</h2>
	<hr />

	<h3 class="center-text">A straightforward process is key. Here’s what you can expect.</h3>

	<!-- Question sections -->
	<section>
		<h4>What's the benefit of hiring an engineer to do this?</h4>
		<p>
			<strong>Efficiency.</strong> I understand your CAD files, schematics, and technical language from
			the start. This eliminates misinterpretation and drastically reduces revision cycles, getting you
			to a perfect final product faster.
		</p>
	</section>

	<section>
		<h4>What is your process?</h4>
		<ol>
			<li>
				<strong>Discovery &amp; Strategy:</strong> A quick call to align on your commercial goals and
				technical details.
			</li>
			<li>
				<strong>Creation &amp; Review:</strong> I build the animation with key milestones for your feedback
				and approval.
			</li>
			<li>
				<strong>Delivery:</strong> You receive the final, high-impact animation, ready for deployment.
			</li>
		</ol>
	</section>

	<section>
		<h4>How much does a project cost?</h4>
		<p>
			Every project is custom-quoted to fit its specific goals. After our call, you'll receive a
			detailed, transparent quote. No hidden fees, no surprises. Just exceptional results.
		</p>
	</section>

	<section>
		<h4>How long will it take?</h4>
		<p>
			Most projects are delivered in 1-3 weeks. Your quote will include a reliable timeline. If you
			have an urgent deadline, let's discuss it.
		</p>
	</section>

	<section class="center-text">
		<h4>Still have a question?</h4>
		<Button onclick={switchToContact}>Let's talk</Button>
	</section>
</div>
