import lazyLoading from './lazy-loading'

export default {
  name: 'Component',
  path: '/component',
  meta: {
    label: '컨포넌트 모음'
  },
  component: lazyLoading('component'),
  children: [
    {
      name: 'component',
      path: '',
      component: lazyLoading('component/Button'),
      meta: {
        label: '버튼'
      }
    },
    {
      name: 'button',
      path: 'button-1',
      component: lazyLoading('component/Button'),
      meta: {
        label: '버튼'
      }
    }
  ]
}
