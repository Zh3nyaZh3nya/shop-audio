import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@/assets/fonts/fonts.css';
import { defaults } from '@/utils/vuetify/defaults'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    colors: {
                        primary: '#1A237E',
                        secondary: '#FFB300',
                        accent: '#E53935',
                        background: '#F5F5F5',
                        surface: '#FFFFFF',
                        success: '#43A047',
                        warning: '#FB8C00',
                        error: '#D32F2F',
                        info: '#0288D1',
                    },
                },
            },
        },
        defaults,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
        components,
        directives,
        ssr: true,
    })
    app.vueApp.use(vuetify)
})
