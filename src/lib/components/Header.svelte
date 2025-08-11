<script>
	import { base } from '$app/paths';

	// State to control the visibility of the mobile menu
	let isMobileMenuOpen = false;

	// Function to toggle the menu's open/closed state
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<header class="glass-header">
	<nav class="main-nav">
		<a href="{base}/" class="nav-logo">
			<img src="/lightbulb.svg" alt="Zenzak Animation Home" class="home-icon" />
			<span>Zenzak Animation</span>
		</a>

		<!-- Desktop Navigation Links (Now always hidden) -->
		<div class="nav-links-desktop">
			<a href="{base}/services">Services</a>
			<a href="{base}/solutions">3D Solutions</a>
			<a href="{base}/faq">FAQs</a>
			<a href="{base}/blog">Blog</a>
			<a href="{base}/contact">Contact</a>
		</div>

		<!-- Hamburger Menu Button -->
		<button class="hamburger-menu" on:click={toggleMobileMenu} aria-label="Open navigation menu">
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5 8.75H25" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
				<path d="M5 15H25" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
				<path d="M5 21.25H25" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
			</svg>
		</button>

		<!-- Mobile Navigation Links (conditionally rendered) -->
		{#if isMobileMenuOpen}
			<div class="nav-links-mobile">
				<a href="{base}/services" on:click={toggleMobileMenu}>Services</a>
				<a href="{base}/solutions" on:click={toggleMobileMenu}>3D Solutions</a>
				<a href="{base}/faq" on:click={toggleMobileMenu}>FAQs</a>
				<a href="{base}/blog" on:click={toggleMobileMenu}>Blog</a>
				<a href="{base}/contact" on:click={toggleMobileMenu}>Contact</a>
			</div>
		{/if}
	</nav>
</header>

<style>
	.glass-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 1rem 2rem;
		z-index: 1000;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(150, 150, 150, 0.2);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}

	.main-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.nav-logo {
        display: flex;
  		align-items: center;
		font-weight: bold;
		font-size: 1.5rem;
		color: white;
		text-decoration: none;
	}

    .home-icon {
	  height: 1.4em; /* Adjust this value to get the perfect size */
	  width: auto; /* Maintains the aspect ratio */
	  margin-right: 0.5em; /* Adjust for spacing */
	}

	/* Hamburger Menu Button Styling - NOW ALWAYS VISIBLE */
	.hamburger-menu {
		display: block; /* Changed from none to block */
		background: none;
		border: none;
		cursor: pointer;
		z-index: 1001;
	}

	/* Desktop links styling - NOW ALWAYS HIDDEN */
	.nav-links-desktop {
		display: none; /* Hide the desktop links by default */
	}

	.nav-links-desktop a {
		color: white;
		text-decoration: none;
		margin-left: 1.5rem;
		transition: color 0.3s ease;
	}

	.nav-links-desktop a:hover {
		color: #ccc;
	}

	/* Mobile navigation container */
	.nav-links-mobile {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(10, 10, 15, 0.95); /* Darker overlay */
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.nav-links-mobile a {
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 500;
	}
	
	/* Media query is no longer needed for controlling menu visibility, but can be kept for other responsive adjustments */
	@media (max-width: 768px) {
		/* You can keep this for other mobile-specific styles if needed */
	}
</style>