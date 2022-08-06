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
  },
]
