import { d2CrudPlus } from 'd2-crud-plus'
const types = {
  'editor-quill': {
    form: { component: { name: 'd2p-quill', span: 24 }, span: 24 }
  }

}

function install (Vue, options) {
  Vue.component('d2p-quill', () => import('./lib/d2-quill'))
  // 配置type
  if (d2CrudPlus != null) {
    // 设置默认uploader
    d2CrudPlus.util.columnResolve.addTypes(types)
  }
}

export default {
  install
}