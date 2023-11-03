
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/User/Desktop/prep_proj/git deployments/nuxtRender/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "46b06fac-6af2-42d6-8db3-b21dfc31d305"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
