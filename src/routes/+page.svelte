<script>
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';

	let contentVisible = $state(false);

	onMount(() => {
		const timer = setTimeout(() => {
			contentVisible = true;
		}, 100);
		return () => clearTimeout(timer);
	});
</script>

<!-- A new wrapper for robust centering and layout -->
<div class="page-container">
	<main class="home-content" class:visible={contentVisible}>
		<!-- The hero content remains identical -->
		<div class="logo-icon-container hero-element">
			<img src="/lightbulb.svg" alt="Idea lightbulb icon" class="logo-icon" />
		</div>

		<div class="title-container hero-element">
			<h1 class="title">ZENZAK ANIMATION</h1>
		</div>

		<div class="subtitle-panel-wrapper hero-element">
			<p class="subtitle">
				MAKING COMPLEX IDEAS CLEAR, PERSUASIVE, AND READY FOR MARKET.
			</p>
		</div>

		<div class="hero-element quote-button-wrapper">
			<!-- Link to the new contact page -->
			<Button variant="fill" size="large" href="/contact">
				Get a Project Quote
			</Button>
		</div>

		<nav class="main-nav">
			<!-- Update buttons to use href for navigation -->
			<Button href="/services">SERVICES</Button>
			<Button href="/solutions">3D SOLUTIONS</Button>
			<Button href="/faq">FAQS</Button>
			<Button href="/blog">BLOG</Button>
			<Button href="/contact">CONTACT</Button>
		</nav>
	</main>

	<!-- The footer is now a flex-item, centered by its parent -->
	<footer class="footer-credit" class:visible={contentVisible}>
		BACKGROUND ANIMATION BY ZENZAK ANIMATION.
	</footer>
</div>

<style>
	/* --- NEW: Page Layout Container --- */
	.page-container {
		display: flex;
		flex-direction: column;
		align-items: center; /* This horizontally centers the main content and footer */
		min-height: 100dvh -22px; /* Use dynamic viewport height for best mobile support */
		padding: 2rem;
	}

	/* --- MODIFIED: Home Content --- */
	.home-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; /* This vertically centers your hero content */
		flex-grow: 1; /* This is key: it makes the main area expand to push the footer down */
		text-align: center;
		width: 100%;
		max-width: 1200px;
		/* margin: auto; and padding: 2rem; are no longer needed here */
	}

	/* --- ANIMATION STYLES (Footer selector corrected) --- */
	.hero-element,
	.main-nav,
	.footer-credit {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1),
			transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
	}
	/* Note: No longer need to reference .home-content to style .footer-credit */
	.home-content.visible .hero-element,
	.home-content.visible .main-nav,
	.footer-credit.visible {
		/* CORRECTED SELECTOR */
		opacity: 1;
		transform: translateY(0);
	}
	/* Stagger the animation */
	.home-content.visible .hero-element:nth-child(1) {
		transition-delay: 0.1s;
	}
	.home-content.visible .hero-element:nth-child(2) {
		transition-delay: 0.2s;
	}
	.home-content.visible .hero-element:nth-child(3) {
		transition-delay: 0.3s;
	}
	.home-content.visible .hero-element:nth-child(4) {
		transition-delay: 0.4s;
	}
	.home-content.visible .main-nav {
		transition-delay: 0.6s;
	}
	.footer-credit.visible {
		/* CORRECTED SELECTOR */
		transition-delay: 0.7s;
		opacity: 0.5;
	}

	/* --- UI STYLES (Largely unchanged) --- */
	.logo-icon-container {
		position: relative;
		margin-bottom: 2rem;
	}
	.logo-icon {
		width: 56px;
		height: 56px;
		opacity: 0.8;
	}
	.title-container {
		position: relative;
		padding: 1.5rem 0;
		margin: 0.5rem 0;
		width: 100%;
		max-width: 550px;
	}
	.title-container::before,
	.title-container::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.2);
	}
	.title-container::before {
		top: 0;
	}
	.title-container::after {
		bottom: 0;
	}
	.title {
		font-size: clamp(2rem, 6vw, 3.2rem); /* Responsive font size */
		letter-spacing: 0.4em;
		margin: 0;
		padding: 0 1rem;
		font-weight: 200;
		color: #f0f0f0;
	}
	.subtitle {
		max-width: none;
		margin: 0;
		line-height: 1.8;
		font-size: clamp(1rem, 2.5vw, 1.2rem); /* Responsive font size */
		font-weight: 600;
		color: #ccc;
		letter-spacing: 0.05em;
	}
	.subtitle-panel-wrapper {
	/* The Glass Effect */
	background: rgba(227, 227, 240, 0.0); /* A dark, semi-transparent background */
	-webkit-backdrop-filter: blur(5px); /* For Safari */
	backdrop-filter: blur(5px); /* The "frosted glass" blur effect */
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 18px; /* Rounded corners for the panel */
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* A subtle shadow adds depth */

	/* Layout and Spacing */
		padding: 0.5rem 2rem;
	max-width: 500px; /* Give it a max width */
	width: 100%;

	/* We move the margin from the original .subtitle to this wrapper */
	margin: 2rem 0 3rem 0;
}

	/* --- MODERN NAVIGATION STYLES (Unchanged) --- */
	.main-nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		width: 100%;
		max-width: 700px;
		margin-bottom: 3rem;
	}

	.quote-button-wrapper {
		margin-bottom: 4rem;
	}

	/* --- MODIFIED: Footer Credit --- */
	.footer-credit {
		font-size: 0.8rem;
		letter-spacing: 0.1em;
	}
	.sections-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 0 2rem;
	}
</style>
