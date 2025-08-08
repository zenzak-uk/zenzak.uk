<script>
	import { onMount } from 'svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Services from '$lib/components/Services.svelte';
	import Solutions from '$lib/components/Solutions.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Contact from '$lib/components/Contact.svelte';

	let activeModal = $state(null);
	let contentVisible = $state(false);

	const modalComponentMap = {
		services: Services,
		solutions: Solutions,
		faq: Faq,
		contact: Contact
	};

	const ActiveComponent = $derived(activeModal ? modalComponentMap[activeModal] : null);

	onMount(() => {
		// Trigger fade-in animation
		const timer = setTimeout(() => {
			contentVisible = true;
		}, 100);
		return () => clearTimeout(timer);
	});
</script>

<!-- A new wrapper for robust centering and layout -->
<div class="page-container">
	<main class="home-content" class:visible={contentVisible}>
		<div class="logo-icon-container hero-element">
			<div class="logo-icon-glow"></div>
			<img src="/lightbulb.svg" alt="Idea lightbulb icon" class="logo-icon" />
		</div>

		<div class="title-container hero-element">
			<h1 class="title">ZENZAK ANIMATION</h1>
		</div>

		<p class="subtitle hero-element">MAKING COMPLEX IDEAS CLEAR, PERSUASIVE, AND READY FOR MARKET.</p>

		<button class="quote-button hero-element" onclick={() => (activeModal = 'contact')}>
			Get a Project Quote
		</button>

		<nav class="main-nav">
			<button onclick={() => (activeModal = 'services')}>SERVICES</button>
			<button onclick={() => (activeModal = 'solutions')}>3D SOLUTIONS</button>
			<button onclick={() => (activeModal = 'faq')}>FAQS</button>
			<button onclick={() => (activeModal = 'contact')}>CONTACT</button>
		</nav>
	</main>

	<!-- The footer is now a flex-item, centered by its parent -->
	<footer class="footer-credit" class:visible={contentVisible}>
		BACKGROUND ANIMATION BY ZENZAK ANIMATION.
	</footer>
</div>

{#if ActiveComponent}
	<Modal onclose={() => (activeModal = null)}>
		<ActiveComponent on:switchmodal={(event) => (activeModal = event.detail)} />
	</Modal>
{/if}

<style>
	/* --- NEW: Page Layout Container --- */
	.page-container {
		display: flex;
		flex-direction: column;
		align-items: center; /* This horizontally centers the main content and footer */
		min-height: 100dvh; /* Use dynamic viewport height for best mobile support */
		padding: 2rem;
		box-sizing: border-box;
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
	.footer-credit.visible { /* CORRECTED SELECTOR */
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
	.footer-credit.visible { /* CORRECTED SELECTOR */
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
	.logo-icon-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 120px;
		height: 120px;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%);
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
		max-width: 500px;
		line-height: 1.8;
		margin: 2rem 0 3rem 0;
		font-size: clamp(1rem, 2.5vw, 1.2rem); /* Responsive font size */
		font-weight: 300;
		color: #ccc;
		letter-spacing: 0.05em;
	}
	.quote-button {
		border: 1px solid rgba(255, 255, 255, 0.6);
		padding: 14px 32px;
		margin-bottom: 4rem;
		transition: all 0.2s;
		border-radius: 4px;
		font-size: 1rem;
		letter-spacing: 0.1em;
		font-weight: 400;
	}
	.quote-button:hover {
		background-color: white;
		color: black;
		border-color: white;
	}

	/* --- MODERN NAVIGATION STYLES (Unchanged) --- */
	.main-nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		width: 100%;
		max-width: 700px;
	}
	.main-nav button {
		flex-grow: 1;
		flex-basis: 160px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 4px;
		padding: 0.8rem 1.6rem;
		transition: all 0.2s;
		font-size: 0.9rem;
		letter-spacing: 0.15em;
		color: #ccc;
	}
	.main-nav button:not(:last-child)::after {
		display: none;
	}
	.main-nav button:hover {
		color: black;
		background-color: white;
		border-color: white;
	}

	/* --- MODIFIED: Footer Credit --- */
	.footer-credit {
		/* position: fixed and bottom are no longer needed */
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		flex-shrink: 0; /* Prevents the footer from shrinking */
	}
</style>