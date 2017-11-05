import home from './home'
import project1 from './project1'
import component from './component'

const state = {
  items: [
    home,
    project1,
    component
  ]
}

const getters = {
  menus: state => state.items
}

export default {
  state,
  getters
}
