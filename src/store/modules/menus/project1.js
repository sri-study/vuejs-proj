import lazyLoading from './lazy-loading'

export default {
  name: 'Project1',
  path: '/project1',
  meta: {
    label: '프로젝트1'
  },
  component: lazyLoading('project1'),
  children: [
    {
      name: 'project1',
      path: '',
      component: lazyLoading('project1/Project1'),
      meta: {
        label: '프로젝트1-메인'
      }
    },
    {
      name: 'project1-1',
      path: 'project1-1',
      component: lazyLoading('project1/Project1-1'),
      meta: {
        label: '프로젝트1-1'
      }
    },
    {
      name: 'project1-2',
      path: 'project1-2',
      component: lazyLoading('project1/Project1-2'),
      meta: {
        label: '프로젝트1-2'
      }
    }
  ]
}
