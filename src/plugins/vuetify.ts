import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
// @ts-expect-error TODO solve this problem later
import { createVuetify } from 'vuetify'

export default createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
})