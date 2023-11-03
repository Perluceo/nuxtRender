import { resolveComponent, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/User/Desktop/prep_proj/git%20deployments/nuxtRender/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  asyncData() {
    return {
      name: process.static ? "static" : "server"
    };
  },
  head: {
    title: "About page"
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NLink = resolveComponent("NLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Hi from ${ssrInterpolate(_ctx.name)}</p>`);
  _push(ssrRenderComponent(_component_NLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home page `);
      } else {
        return [
          createTextVNode(" Home page ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-4e4206de.mjs.map
