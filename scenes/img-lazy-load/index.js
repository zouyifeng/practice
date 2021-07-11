const LazyLoad = {
  install(Vue, options) {
    let src = options.default
    Vue.directive('lazy', {
      bind(el, binding) {
        LazyLoad.init(el, binding.value, src)
      },
      inserted(el) {
        if (IntersectionObserver) {
          LazyLoad.observe(el)
        } else {
          LazyLoad.listenerScroll(el)
        }
      }
    })
  },
  init(el, val, def) {
    el.setAttribute('data-src', val)
    el.setAttribute('src', def)
  },
  observe(el) {
    var io = new IntersectionObserver(entries => {
      let realSrc = el.dataset.src
      if (entries[0].isIntersecting) {
        if (realSrc)
        {
          el.src = realSrc
          el.removeAttribute('data-src')
        }
      }
    })
    io.observe(el)
  },
  listenerScroll(el) {
    let handler = LazyLoad.throttle(LazyLoad.load, 300)
    LazyLoad.load(el)
    window.addEventListener('scroll', () => {
      handler(el)
    })
  },
  load(el) {
    let windowHeight = document.documentElement.clientHeight
    let elTop = el.getBoundingClientRect().top
    let elBtm = el.getBoundingClientRect().bottom
    let realSrc = el.dataset.src
    if (elTop - windowHeight < 0 && elBtm > 0) {
      if (realSrc) {
        el.src = realSrc
        el.removeAttribute('data-src')
      }
    }
  },
  throttle(fn, delay) {
    let preTime
    return function(...args) {
      let currTime = Date.now()
      let context = this
      if (!preTime) {
        preTime = currTime
      }
      if (currTime - preTime > delay) {
        preTime = currTime
        fn.apply(context, args)
      }
    }
  }
}

export default LazyLoad