import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const slug = params.slug ;
	
	try {
		const module = await import(`../../content/${slug}.md`);
		return {
			content: module.default,
			slug
		};
	} catch (e) {
		throw error(404, 'Page not found');
	}
}