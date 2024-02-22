const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-5-ui-lib/**/*.{html,js,svelte,ts}'
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// pink
				// primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"}
				// cyan
				primary: {
					50: '#ecfeff',
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63'
				}

				// more colors in GitHub repo
			}
		}
	}
};

module.exports = config;
