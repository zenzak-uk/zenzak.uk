<!-- src/lib/components/Contact.svelte -->
<script>
    import Button from '$lib/components/Button.svelte';
    export const prerender = true;
</script>

<div class="mx-auto max-w-2xl">
    <hr />

    <p class="text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Ready to see your vision realized? Fill out the form below to tell me about your project. I'll
        get back to you to schedule our discovery call.
    </p>

   <form
	name="contact"
	method="POST"
	data-netlify="true"
	action="/success"
	class="mt-12 space-y-8"
>
	<input type="hidden" name="form-name" value="contact" />

	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
		<div class="flex flex-col">
			<label for="name" class="sr-only">Name</label>
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Name"
				required
				autocomplete="name"
				class="w-full rounded-md border border-gray-400/50 bg-white/10 px-4 py-3 text-sm text-gray-900 placeholder-gray-400/70 shadow-sm backdrop-blur-md transition focus:border-indigo-500/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-gray-100"
			/>
		</div>

		<div class="flex flex-col">
			<label for="email" class="sr-only">Email</label>
			<input
				id="email"
				type="email"
				name="email"
				placeholder="Email"
				required
				autocomplete="email"
				class="w-full rounded-md border border-gray-400/50 bg-white/10 px-4 py-3 text-sm text-gray-900 placeholder-gray-400/70 shadow-sm backdrop-blur-md transition focus:border-indigo-500/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-gray-100"
			/>
		</div>
	</div>

	<div class="flex flex-col">
		<label for="message" class="sr-only">Message</label>
		<textarea
			id="message"
			name="message"
			placeholder="Message"
			rows="6"
			required
			class="w-full resize-y rounded-md border border-gray-400/50 bg-white/10 px-4 py-3 text-sm text-gray-900 placeholder-gray-400/70 shadow-sm backdrop-blur-md transition focus:border-indigo-500/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-gray-100"
		></textarea>
	</div>

	<div class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
		<div class="flex gap-3">
			<Button type="reset" variant="outline" class="min-w-[110px]">Reset</Button>
			<Button type="submit" variant="fill" class="min-w-[140px]">Send Message</Button>
		</div>
	</div>
</form>

    <p class="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
        Or email me directly at
        <a
            href="mailto:hello@zenzak.uk"
            class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 underline decoration-indigo-400/40 hover:decoration-indigo-500 transition"
            >hello@zenzak.uk</a
        >
    </p>
</div>
