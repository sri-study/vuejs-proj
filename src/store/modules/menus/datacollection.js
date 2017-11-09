import lazyLoading from './lazy-loading'

export default {
  name: 'DataCollection',
  path: '/data-collection',
  meta: {
    label: '자료 모음'
  },
  component: lazyLoading('data-collection')
}
