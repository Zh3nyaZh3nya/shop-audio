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
                        primary: '#22b0f3',
                        secondary: '#4238f5',
                        accent: '#fa4d62',
                        background: '#1b1d22',
                        'background-card': '#23292f',
                        surface: '#FFFFFF',
                        success: '#4c8217',
                        warning: '#FB8C00',
                        pending: '#ff9800',
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
