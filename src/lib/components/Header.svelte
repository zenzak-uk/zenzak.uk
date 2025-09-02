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

<header
	class="fixed top-0 left-0 z-[1000] w-full border-b border-gray-400/20 px-8 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md"
>
	<nav
		class="relative mx-auto flex max-w-6xl items-center justify-between text-2xl text-white no-underline"
	>
		<a href="{base}/" class="flex items-center text-2xl font-bold text-white no-underline">
			<img src="/lightbulb.svg" alt="Zenzak Animation Home" class="mr-2 h-[1.4em] w-auto" />
			<span class="font-light tracking-[0.2em]">ZENZAK ANIMATION</span>
		</a>

		<!-- Right side icons group -->
		<div class="flex items-center gap-2">
			<a
				href="https://github.com/zenzak-uk/zenzak.uk"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center rounded-[10px] p-1 text-white transition-colors duration-150 ease-out hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none motion-reduce:transition-none"
			>
				<Github />
			</a>

			<!-- Hamburger button -->
			<button
				class="z-[1001] block cursor-pointer rounded-[10px] border-none bg-transparent p-1 text-white transition-colors duration-150 ease-out hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none motion-reduce:transition-none"
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
				class="absolute top-[calc(100%+0.75rem)] right-0 z-[1002] w-[min(92vw,320px)] origin-top-right rounded-[14px] border border-white/[0.08] bg-black/[0.9] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[8px]"
				tabindex="-1"
				use:clickOutside
				on:outclick={closeMenu}
				on:keydown={handleKeydown}
				role="menu"
				transition:scale={{ duration: 150, start: 0.96, opacity: 0.25, easing: cubicOut }}
			>
				<a
					href="{base}/services"
					on:click={closeMenu}
					role="menuitem"
					bind:this={firstLinkEl}
					class="block w-full rounded-[10px] px-8 py-3.5 text-xl font-semibold text-white no-underline outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>Services</a
				>
				<a
					href="{base}/solutions"
					on:click={closeMenu}
					role="menuitem"
					class="block w-full rounded-[10px] px-8 py-3.5 text-xl font-semibold text-white no-underline outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>3D Solutions</a
				>
				<a
					href="{base}/web"
					on:click={closeMenu}
					role="menuitem"
					class="block w-full rounded-[10px] px-8 py-3.5 text-xl font-semibold text-white no-underline outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>Web</a
				>
				<a
					href="{base}/faq"
					on:click={closeMenu}
					role="menuitem"
					class="block w-full rounded-[10px] px-8 py-3.5 text-xl font-semibold text-white no-underline outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>FAQs</a
				>
				<a
					href="{base}/blog"
					on:click={closeMenu}
					role="menuitem"
					class="block w-full rounded-[10px] px-8 py-3.5 text-xl font-semibold text-white no-underline outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>Blog</a
				>
				<a
					href="{base}/contact"
					on:click={closeMenu}
					role="menuitem"
					class="block w-full rounded-[10px] px-8 py-3.5 text-xl font-semibold text-white no-underline outline-none hover:bg-white/[0.08] focus-visible:bg-white/[0.08]"
					>Contact</a
				>
			</div>
		{/if}
	</nav>
</header>
