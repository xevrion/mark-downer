export async function load() {
	const files = import.meta.glob('../content/**/*.md', { eager: true });
	
	const pages = Object.keys(files).map((path) => {
		const slug = path.replace('../content/', '').replace(/\.md$/, '');
		return { slug, path };
	});

	return { pages };
}