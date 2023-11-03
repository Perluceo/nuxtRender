
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/User/Desktop/prep_proj/git deployments/nuxtRender/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "b711903c-90c7-466d-b151-d3b29cb11fca"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
