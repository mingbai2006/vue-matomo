export function getMatomo () {
  return window.Piwik.getAsyncTracker()
}

export function loadScript (trackerScript) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = trackerScript

    const head = document.head || document.getElementsByTagName('head')[0]
    head.appendChild(script)

    script.onload = resolve
    script.onerror = reject
  })
}

export function getResolvedHref(router, path) {
  let url = router.resolve(path).href
  if (url.indexOf('/') !== 0) {
    return '/' + url
  } else {
    return url
  }
}
