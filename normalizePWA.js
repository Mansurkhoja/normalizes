export default () => {

  window.resizeTo(window.screen.availWidth, window.screen.availHeight);

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

  window.addEventListener('keydown',
    event => {
      if (  event.key === 'Dead' ||
          event.code === 'KeyI' ||
          event.code === 'KeyR' ||
          event.code === 'F5'
      ) event.preventDefault()
    } 
  )

}
