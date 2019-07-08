/**
 * 截流函数
 * @param {Function} func
 * @param {Number} wait
 */
export function _throttle (func: any, wait: number) {
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
export function _debounce (func: any, wait: number) {
  clearTimeout(window.$timer)
  window.$timer = setTimeout(func, wait)
}
