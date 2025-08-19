<!-- src/lib/components/Contact.svelte -->
<script>
	import Button from '$lib/components/Button.svelte';
	export const prerender = true;
</script>

<div class="content-wrapper">
	<hr />
	<p class="center-text">
		Ready to see your vision realized? Fill out the form below to tell me about your project. I'll
		get back to you to schedule our discovery call.
	</p>

	<form name="contact" method="POST" data-netlify="true" action="/success" class="form-wrapper">
		<input type="hidden" name="form-name" value="contact" />

		<div class="form-row">
			<input type="text" name="name" placeholder="NAME" required />
			<input type="email" name="email" placeholder="EMAIL" required />
		</div>

		<textarea name="message" placeholder="MESSAGE" rows="5" required></textarea>

		<div class="form-buttons">
			<!-- Use the enhanced Button component with variants -->
			<Button type="reset" variant="outline">Reset</Button>
			<Button type="submit" variant="fill">Send Message</Button>
		</div>
	</form>

	<p class="direct-email">Or email me directly at: zenzak@tuta.io</p>
</div>

<style>
	.direct-email {
		text-align: center;
		margin-top: 2rem;
		font-size: 0.9rem;
		color: #888;
	}
</style>
