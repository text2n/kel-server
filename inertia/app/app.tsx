/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import Layout from '~/pages/layout';

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: async (name) => {
    let page: any = await resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    )
    page.default.layout = page.default.layout || ((page: any) => <Layout children={page} />)
    return page
  },

  setup({ el, App, props }) {
    
    createRoot(el).render(<App {...props} />);
    
  },
});