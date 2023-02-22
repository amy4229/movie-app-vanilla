import Home from './home.js'
import About from './about.js'
import createRouter from '../core/router.js'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/about', component: About },
]);