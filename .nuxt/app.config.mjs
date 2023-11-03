
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/User/Desktop/prep_proj/git deployments/nuxtRender/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "dd12aab8-d582-4ecc-86a5-e63daf497107"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
