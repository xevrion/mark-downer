import { error } from '@sveltejs/kit';

// Preload all MD files under `src/content` recursively
const allPages = import.meta.glob('$content/**/*.md');

export async function load({ params }) {
	const slugArray = params.slug;
	const slugPath = Array.isArray(slugArray) ? slugArray.join('/') : slugArray;

	// Match the full path like 'notes/week2.md'
	const matchingKey = Object.keys(allPages).find((key) =>
		key.endsWith(`${slugPath}.md`)
	);

	if (!matchingKey) {
		throw error(404, `Page not found: ${slugPath}`);
	}

	const module = await allPages[matchingKey]();

	return {
		content: module.default,
		slug: slugPath
	};
}
