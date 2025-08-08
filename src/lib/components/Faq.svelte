<!-- src/lib/components/Faq.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function switchToContact() {
		// Dispatch a custom event named 'switchmodal'
		// and pass the name of the target modal ('contact') as the data.
		dispatch('switchmodal', 'contact');
	}
</script>

<div class="content-wrapper">
	<h2>FREQUENTLY ASKED QUESTIONS</h2>
	<hr />

	<h3>A straightforward process is key. Here’s what you can expect.</h3>

	<!-- Question sections -->
	<section>
		<h4>What's the benefit of hiring an engineer to do this?</h4>
		<p>
			<strong>Efficiency.</strong> I understand your CAD files, schematics, and technical language
			from the start. This eliminates misinterpretation and drastically reduces revision cycles,
			getting you to a perfect final product faster.
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
				<strong>Creation &amp; Review:</strong> I build the animation with key milestones for your
				feedback and approval.
			</li>
			<li><strong>Delivery:</strong> You receive the final, high-impact animation, ready for deployment.</li>
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
			Most projects are delivered in 1-3 weeks. Your quote will include a reliable timeline. If
			you have an urgent deadline, let's discuss it.
		</p>
	</section>

	<section class="final-question">
		<h4>Still have a question?</h4>
		<!-- This is now a button that triggers our Svelte function -->
		<button on:click={switchToContact} class="button-link"> Let's talk </button>
	</section>
</div>

<style>
	/* Using styles similar to Services.svelte for consistency */
	.content-wrapper {
		max-width: 700px;
		margin: 0 auto;
	}
	h2 {
		text-align: center;
		letter-spacing: 0.2em;
		margin-bottom: 1rem;
		font-weight: 300;
	}
	hr {
		border: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		margin-bottom: 2rem;
	}
	h3 {
		text-align: center;
		margin-bottom: 3rem;
		font-weight: 300;
		color: #ccc;
		letter-spacing: 0.05em;
	}
	h4 {
		font-weight: 500;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
	}
	p,
	li {
		line-height: 1.7;
		color: #ccc;
		max-width: 65ch; /* Improves readability */
	}
	ol {
		padding-left: 20px;
	}
	li {
		margin-bottom: 1rem;
	}
	section {
		margin-bottom: 2.5rem;
	}

	.final-question {
		text-align: center;
		margin-top: 3rem;
	}

	/* Style for the new button to look like a link or a button */
	.button-link {
		/* Reset default button styles */
		background: none;
		border: 1px solid rgba(255, 255, 255, 0.6);
		font-family: inherit;
		font-size: 1rem;
		cursor: pointer;
		padding: 10px 24px;
		border-radius: 4px;
		color: #f0f0f0;
		transition:
			background-color 0.2s,
			color 0.2s;
	}

	.button-link:hover {
		background-color: white;
		color: black;
	}
</style>