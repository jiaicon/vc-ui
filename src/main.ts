import { install as installMuUi } from 'myui'
import { createApp } from 'vue'
import APP from './app.vue'

const setupApp = () => {
  const app = createApp(APP)
  installMuUi(app)
  app.mount('#app')
}

setupApp()
