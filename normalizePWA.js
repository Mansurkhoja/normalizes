export default () => {

  window.addEventListener('contextmenu',
    event => event.preventDefault()
  )

  window.addEventListener('wheel',
    event => {
      if (event.ctrlKey) event.preventDefault()
    }, {
      'passive': false
    }
  )

  window.addEventListener('touchstart',
    event => {
      if (event.isTrusted && event.touches.length > 1) event.preventDefault()
    }, {
      'passive': false
    }
  )

  if (navigator.userAgent.search('Windows') !== -1) {
    document.documentElement.classList.add('windows')
  }

}
