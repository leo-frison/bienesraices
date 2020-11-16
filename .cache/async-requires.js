// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-components-paginas-js": () => import("./../../../src/components/paginas.js" /* webpackChunkName: "component---src-components-paginas-js" */),
  "component---src-components-propiedades-js": () => import("./../../../src/components/propiedades.js" /* webpackChunkName: "component---src-components-propiedades-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

