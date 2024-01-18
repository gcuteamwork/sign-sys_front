// Plugins
import pinia from '../store'
import router from '../router'
import 'uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
    app
      .use(router)
      .use(pinia)
      .use(ElementPlus)
      for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
  }
  