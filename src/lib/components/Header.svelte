<script>
	import { base } from '$app/paths';
	import { scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let isMobileMenuOpen = false;
	let buttonEl;
	let firstLinkEl;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMenu() {
		isMobileMenuOpen = false;
	}

	// Click-outside action
	function clickOutside(node) {
		const handlePointer = (event) => {
			if (buttonEl && buttonEl.contains(event.target)) {
				return;
			}
			if (!node.contains(event.target)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};
		document.addEventListener('pointerdown', handlePointer, true);
		return {
			destroy() {
				document.removeEventListener('pointerdown', handlePointer, true);
			}
		};
	}

	// Focus first item when opening
	$: if (isMobileMenuOpen) {
		setTimeout(() => firstLinkEl?.focus(), 0);
	}

	function handleKeydown(e) {
		if (e.key === 'Escape') {
			closeMenu();
			buttonEl?.focus();
		}
	}
</script>

<header class="glass-header">
	<nav class="main-nav">
		<a href="{base}/" class="nav-logo">
			<img src="/lightbulb.svg" alt="Zenzak Animation Home" class="home-icon" />
			<span>ZENZAK ANIMATION</span>
		</a>

		<!-- Desktop links (keep hidden if you want only hamburger) -->
		<div class="nav-links-desktop">
			<a href="{base}/services">Services</a>
			<a href="{base}/solutions">3D Solutions</a>
			<a href="{base}/faq">FAQs</a>
			<a href="{base}/blog">Blog</a>
			<a href="{base}/contact">Contact</a>
		</div>

		<!-- Hamburger button -->
		<button
			class="hamburger-menu"
			bind:this={buttonEl}
			on:click={toggleMobileMenu}
			aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			aria-expanded={isMobileMenuOpen}
			aria-haspopup="true"
			aria-controls="mobile-menu-dropdown"
		>
			{#if !isMobileMenuOpen}
				<!-- Hamburger icon -->
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 8.75H25" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
					<path d="M5 15H25" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
					<path d="M5 21.25H25" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
				</svg>
			{:else}
				<!-- Close (X) icon -->
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 8L22 22" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
					<path d="M22 8L8 22" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
				</svg>
			{/if}
		</button>

		<!-- Dropdown (anchored, not full-screen) -->
		{#if isMobileMenuOpen}
			<div
				id="mobile-menu-dropdown"
				class="nav-dropdown"
				tabindex="-1"
				use:clickOutside
				on:outclick={closeMenu}
				on:keydown={handleKeydown}
				role="menu"
				transition:scale={{ duration: 150, start: 0.96, opacity: 0.25, easing: cubicOut }}
			>
				<a href="{base}/services" on:click={closeMenu} role="menuitem" bind:this={firstLinkEl}>Services</a>
				<a href="{base}/solutions" on:click={closeMenu} role="menuitem">3D Solutions</a>
				<a href="{base}/faq" on:click={closeMenu} role="menuitem">FAQs</a>
				<a href="{base}/blog" on:click={closeMenu} role="menuitem">Blog</a>
				<a href="{base}/contact" on:click={closeMenu} role="menuitem">Contact</a>
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
		font-size: 1.5rem;
		color: white;
		text-decoration: none;
		position: relative; /* anchor for dropdown */
	}

	.nav-logo {
		display: flex;
		align-items: center;
		font-weight: bold;
		font-size: 1.5rem;
		color: white;
		text-decoration: none;
	}

	.nav-logo span {
		font-weight: 200;
		letter-spacing: 0.25em;
	}

	.home-icon {
		height: 1.4em;
		width: auto;
		margin-right: 0.5em;
	}

	/* Hamburger always visible */
	.hamburger-menu {
		display: block;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 1001;
		color: white;
		padding: 0.25rem;
		border-radius: 10px;
		transition: background-color 160ms ease;
	}
	.hamburger-menu:hover,
	.hamburger-menu:focus-visible {
		background: rgba(255, 255, 255, 0.06);
		outline: none;
	}

	/* Desktop links hidden by default if you want only hamburger */
	.nav-links-desktop { display: none; }
	.nav-links-desktop a {
		color: white;
		text-decoration: none;
		margin-left: 1.5rem;
		transition: color 0.3s ease;
	}
	.nav-links-desktop a:hover { color: #ccc; }

	/* Modern, glassy dropdown */
	.nav-dropdown {
		position: absolute;
		top: calc(100% + 0.75rem);
		right: 0;
		width: min(92vw, 320px);
		padding: 0.5rem;
		border-radius: 14px;
		background: rgba(0, 0, 0, 0.788);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
		z-index: 1002;
		transform-origin: top right;
	}

	.nav-dropdown a {
		display: block;
		width: 100%;
		color: white;
		text-decoration: none;
		font-size: 1.15rem;
		font-weight: 300;
		padding: 0.85rem 2rem;
		border-radius: 10px;
		outline: none;
	}
	.nav-dropdown a:hover,
	.nav-dropdown a:focus-visible {
		background: rgba(255, 255, 255, 0.08);
	}


	/* Respect reduced motion preferences */
	@media (prefers-reduced-motion: reduce) {
		.hamburger-menu { transition: none; }
	}
</style>