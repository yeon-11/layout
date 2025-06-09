/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router/router'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
import { createVuetify } from 'vuetify'

// react, vue는 항상 외부모듈 사용시 마운팅
// const app = createApp(App)
const vuetify = createVuetify()
// app.use(vuetify).mount('#app')

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

registerPlugins(app)

// app.mount('#app')
