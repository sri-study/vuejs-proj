import lazyLoading from './lazy-loading'

export default {
  name: 'Home',
  path: '/',
  meta: {
    label: '홈'
  },
  component: lazyLoading('home')
}