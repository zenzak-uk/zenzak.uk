<!-- src/lib/components/Contact.svelte -->
<script>
	// THIS IS THE CRUCIAL PART FOR NETLIFY FORMS
	// It tells SvelteKit to generate a plain HTML file for this component,
	// which Netlify's build bots can find and process.
	export const prerender = true;
</script>

<div class="content-wrapper">
	<h2>CONTACT</h2>
	<hr />
	<p>
		Ready to see your vision realized? Fill out the form below to tell me about your project. I'll
		get back to you to schedule our discovery call.
	</p>

	<!--
      - Added action="/success" to redirect to your custom success page.
      - data-netlify="true" and the hidden input are still correctly in place.
    -->
	<form name="contact" method="POST" data-netlify="true" action="/success">
		<!-- Netlify requires this hidden input to properly register the form -->
		<input type="hidden" name="form-name" value="contact" />

		<div class="form-row">
			<input type="text" name="name" placeholder="NAME" required />
			<input type="email" name="email" placeholder="EMAIL" required />
		</div>
		<textarea name="message" placeholder="MESSAGE" rows="5" required></textarea>

		<div class="form-buttons">
			<button type="submit">Send Message</button>
			<button type="reset">Reset</button>
		</div>
	</form>

	<p class="direct-email">Or email me directly at: zenzak@tuta.io</p>
</div>

<style>
	/* Your styles are great, no changes needed here. */
	.content-wrapper {
		max-width: 600px;
		margin: auto;
	}
	h2 {
		text-align: center;
		letter-spacing: 0.2em;
		font-weight: 300;
	}
	hr {
		border: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		margin: 1rem 0 2rem 0;
	}
	p {
		text-align: center;
		line-height: 1.7;
		color: #ccc;
		margin-bottom: 2rem;
	}
	.direct-email {
		margin-top: 2rem;
		font-size: 0.9rem;
		color: #888;
	}
	form {
		margin-top: 2rem;
	}
	.form-row {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	input,
	textarea {
		width: 100%;
		background: #2a2a2a;
		border: 1px solid #444;
		color: white;
		padding: 0.8rem;
		font-family: inherit;
		font-size: 1rem;
	}
	input {
		border-radius: 30px;
	}
	textarea {
		border-radius: 12px;
	}
	input:focus,
	textarea:focus {
		outline: none;
		border-color: #888;
	}

	.form-buttons {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;
	}
	.form-buttons button {
		border: 1px solid #666;
		padding: 0.6rem 1.2rem;
		border-radius: 30px;
		transition: all 0.2s ease;
		cursor: pointer;
		font-weight: 500;
	}

	/* Primary button style */
	.form-buttons button[type='submit'] {
		background-color: #f0f0f0;
		color: #121212;
		border-color: #f0f0f0;
		flex-grow: 1; /* Make it take more space */
	}

	.form-buttons button[type='submit']:hover {
		background-color: #fff;
		border-color: #fff;
	}

	/* Secondary (outline) button style */
	.form-buttons button[type='reset'] {
		background-color: transparent;
		color: #aaa;
	}

	.form-buttons button[type='reset']:hover {
		background-color: rgba(255, 255, 255, 0.1);
		color: #fff;
		border-color: #888;
	}
</style>