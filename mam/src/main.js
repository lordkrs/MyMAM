import { createApp } from 'vue'
import App from './App.vue'
import RoutesRegistrator from './RoutesRegistrator.js'
import store from './store/index.js'

// createApp(App).use(store).mount('#app')
// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
RoutesRegistrator(app)
app.use(store)
app.mount("#app")