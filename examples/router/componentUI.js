export default [
  {
    path: 'GdHeader',
    component: () => import('../views/componentUI/GdHeader/index.md'),
    meta: { title: '头部组件' },
    hidden: false,
    name: 'GdHeader',
  }, {
    path: 'GdFooter',
    component: () => import('../views/componentUI/GdFooter/index.md'),
    meta: { title: '底部组件' },
    name: 'GdFooter',
  }, {
    path: 'GdChoose',
    component: () => import('../views/componentUI/GdChoose/index.md'),
    meta: { title: '选择办理情形' },
    name: 'GdChoose',
  },
]
