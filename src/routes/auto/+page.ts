import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
	const pageMetaTags: MetaProps = {
		title: 'HighlightAuto Component - Svelte Rune Highlight',
		description: 'Auto syntax highlight component for Svelte Runes.',
		og: {
			title: 'HighlightAuto Component - Svelte Rune Highlight',
			description: 'Auto syntax highlight component for Svelte Runes.'
		},
		twitter: {
			title: 'HighlightAuto Component - Svelte Rune Highlight',
			description: 'Auto syntax highlight component for Svelte Runes.'
		}
	};
	return { pageMetaTags };
};
