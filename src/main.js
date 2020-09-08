import { init, getLocaleFromNavigator } from 'svelte-i18n';
import App from './App.svelte';
import './components/Tailwind.svelte';
import './i18n';

import '../public/images/background_lille_1.jpg';
import '../public/images/background_lille_2.jpg';
import '../public/images/background_lille_3.jpg';
import '../public/images/background_lille_4.jpg';
import '../public/images/lille_gophers_logo.jpg';

const fallbackLocale = 'en-US';
const userLocale = getLocaleFromNavigator();

init({
  fallbackLocale,
  initialLocale: ['en-US', 'fr-FR'].includes(userLocale) ? userLocale : fallbackLocale,
});

const app = new App({
  target: document.body,
});

export default app;
