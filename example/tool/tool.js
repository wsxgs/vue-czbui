/**
 * 截流函数
 * @param {Function} func
 * @param {Number} wait
 */
export function _throttle (func, wait) {
  if (window.$disabled) {
    return
  }
  func()
  window.$disabled = true
  setTimeout(() => {
    window.$disabled = false
  }, wait)
}

/**
 * 防抖函数
 * @param {Function} func
 * @param {Number} wait
 */
export function _debounce (func, wait) {
  clearTimeout(window.$timer)
  window.$timer = setTimeout(func, wait)
}
