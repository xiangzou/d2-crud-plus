export const crudOptions = {
  options: {
    height: '100%' // 表格高度100%, 使用toolbar必须设置
  },
  searchOptions: {
    disabled: true,
    show: null
  },
  columns: [
    {
      title: '图标选择',
      key: 'iconSelect',
      sortable: true,
      type: 'icon-selector'
    },
    {
      title: '用户可输入',
      key: 'iconSelect2',
      sortable: true,
      type: 'icon-selector',
      form: {
        component: {
          props: {
            'user-input': true
          }
        }
      }
    }
  ]
}
