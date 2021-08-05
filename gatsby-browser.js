import { wrapRootElement as wrap } from './root-wrapper';
import '@fontsource/mulish';
import '@fontsource/mulish/700.css';
import '@fontsource/livvic/600.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import './src/assets/tailwind.css';
import './src/assets/language-tabs.css';

// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => window.location.reload();

export const wrapRootElement = wrap;
