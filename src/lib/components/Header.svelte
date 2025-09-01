<script>
	import { base } from '$app/paths';
	import { scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { Github } from 'lucide-svelte';

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

<header class="fixed top-0 left-0 w-full px-8 py-4 z-[1000] backdrop-blur-md border-b border-gray-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
	<nav class="flex justify-between items-center max-w-6xl mx-auto text-2xl text-white no-underline relative">
		<a href="{base}/" class="flex items-center font-bold text-2xl text-white no-underline">
			<img src="/lightbulb.svg" alt="Zenzak Animation Home" class="h-[1.4em] w-auto mr-2" />
			<span class="font-light tracking-[0.2em]">ZENZAK ANIMATION</span>
		</a>

		<!-- Right side icons group -->
		<div class="flex items-center gap-2">
			<a
				href="https://github.com/zenzak-uk/zenzak.uk"
				target="_blank"
				rel="noopener noreferrer"
				class="text-white p-1 rounded-[10px] transition-colors duration-150 ease-out flex items-center hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none motion-reduce:transition-none"
			>
				<Github />
			</a>

			<!-- Hamburger button -->
			<button
				class="block bg-transparent border-none cursor-pointer z-[1001] text-white p-1 rounded-[10px] transition-colors duration-150 ease-out hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none motion-reduce:transition-none"
				bind:this={buttonEl}
				on:click={toggleMobileMenu}
				aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isMobileMenuOpen}
				aria-haspopup="true"
				aria-controls="mobile-menu-dropdown"
			>
				{#if !isMobileMenuOpen}
					<!-- Hamburger icon -->
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M5 8.75H25" stroke="white" stroke-width="2.5" stroke-linecap="round" />
						<path d="M5 15H25" stroke="white" stroke-width="2.5" stroke-linecap="round" />
						<path d="M5 21.25H25" stroke="white" stroke-width="2.5" stroke-linecap="round" />
					</svg>
				{:else}
					<!-- Close (X) icon -->
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M8 8L22 22" stroke="white" stroke-width="2.5" stroke-linecap="round" />
						<path d="M22 8L8 22" stroke="white" stroke-width="2.5" stroke-linecap="round" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Dropdown (anchored, not full-screen) -->
		{#if isMobileMenuOpen}
			<div
				id="mobile-menu-dropdown"
				class="absolute top-[calc(100%+0.75rem)] right-0 w-[min(92vw,320px)] p-2 rounded-[14px] bg-black/[0.9] backdrop-blur-[8px] border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.28)] z-[1002] origin-top-right"
				tabindex="-1"
				use:clickOutside
				on:outclick={closeMenu}
				on:keydown={handleKeydown}
				role="menu"
				transition:scale={{ duration: 150, start: 0.96, opacity: 0.25, easing: cubicOut }}
			>
				<a href="{base}/services" on:click={closeMenu} role="menuitem" bind:this={firstLinkEl}
					class="block w-full text-white no-underline text-xl font-semibold px-8 py-3.5 rounded-[10px] outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>Services</a
				>
				<a href="{base}/solutions" on:click={closeMenu} role="menuitem"
					class="block w-full text-white no-underline text-xl font-semibold px-8 py-3.5 rounded-[10px] outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>3D Solutions</a
				>
				<a href="{base}/web" on:click={closeMenu} role="menuitem"
					class="block w-full text-white no-underline text-xl font-semibold px-8 py-3.5 rounded-[10px] outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>Web</a
				>
				<a href="{base}/faq" on:click={closeMenu} role="menuitem"
					class="block w-full text-white no-underline text-xl font-semibold px-8 py-3.5 rounded-[10px] outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>FAQs</a
				>
				<a href="{base}/blog" on:click={closeMenu} role="menuitem"
					class="block w-full text-white no-underline text-xl font-semibold px-8 py-3.5 rounded-[10px] outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>Blog</a
				>
				<a href="{base}/contact" on:click={closeMenu} role="menuitem"
					class="block w-full text-white no-underline text-xl font-semibold px-8 py-3.5 rounded-[10px] outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>Contact</a
				>
			</div>
		{/if}
	</nav>
</header>