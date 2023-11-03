
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/User/Desktop/prep_proj/git deployments/nuxtRender/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "401711c3-bd54-47ba-96c9-c202e198fbcd"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
