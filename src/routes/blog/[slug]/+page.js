import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
        // Dynamically import the post using the slug from the URL
		const post = await import(`../../../lib/posts/${params.slug}.md`);
		
		return {
			content: post.default, // The Svelte component rendered from Markdown
			meta: post.metadata    // The frontmatter
		};
	} catch (e) {
		// If the post doesn't exist, throw a 404 error
		error(404, `Could not find ${params.slug}`);
	}
}