import i18next from 'i18next';
import { createI18nStore } from 'svelte-i18next';

i18next.init({
	lng: 'pt-br',
	resources: {
		pt: {
			translation: {
				key: 'hello world'
			}
		}
	},
	interpolation: {
		escapeValue: false // not needed for svelte as it escapes by default
	}
});

export default () => createI18nStore(i18next);
