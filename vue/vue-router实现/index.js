const Home = { template: '<div>home</div>' } 
const Book = { template: '<div>book</div>'}
const Movie = { template: '<div>movie</div>'}

const routes = [
  { path: '/', component: Home },
  { path: '/book', component: Book },
  { path: '/movie', component: Movie }
]

class KVueRouter {
  constructor(Vue, options) {

    this.$options = options
    this.routeMap = {}
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
    this.init()
    this.createRouteMap(this.$options)
    this.initComponent(Vue)
  }

  init () {
    window.addEventListener('load', this.onHashChange.bind(this), false)
    window.addEventListener('hashchange', this.onHashChange.bind(this))
  }

  createRouteMap(options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item.component
    })
  }

  initComponent(Vue) {
    console.log('init')
    Vue.component('router-link', {
      props: {
        to: String
      },
      template: '<a :href="to"><slot></slot></a>'
    })

    const _this = this
    Vue.component('router-view', {
      render(h) {
        var component = _this.routeMap[_this.app.current]
        console.log('component: ', component);
        return h(component);
      }
    })
  }

  getHash () {
    return window.location.hash.slice(1) || '/'
  }

  onHashChange() {
    console.log(this.getHash());
    this.app.current = this.getHash()
  }
}

const router = new KVueRouter(Vue, {
  routes
})

new Vue({
  el: '#app',
  router
})