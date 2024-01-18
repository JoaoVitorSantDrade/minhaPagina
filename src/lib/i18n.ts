import i18next from 'i18next';
import { createI18nStore } from 'svelte-i18next';

import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt-br.json';

i18next.init({
	lng: 'pt_br',
	resources: {
		pt_br: {
			translation: ptTranslations
		},
		en: {
			translation: enTranslations
		}
	},
	interpolation: {
		escapeValue: false // not needed for svelte as it escapes by default
	}
});

export default () => createI18nStore(i18next);
