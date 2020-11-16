const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-components-paginas-js": hot(preferDefault(require("/home/leo/Escritorio/bienesraicesfrontend/src/components/paginas.js"))),
  "component---src-components-propiedades-js": hot(preferDefault(require("/home/leo/Escritorio/bienesraicesfrontend/src/components/propiedades.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/leo/Escritorio/bienesraicesfrontend/src/pages/index.js")))
}

