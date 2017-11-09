import home from './home'
import project1 from './project1'
import component from './component'
import datacollection from "./datacollection";

const state = {
  items: [
    home,
    project1,
    component,
    datacollection
  ]
}

const getters = {
  menus: state => state.items
}

export default {
  state,
  getters
}
