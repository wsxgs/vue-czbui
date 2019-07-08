declare module '*.vue'
declare module 'qs'
declare module 'vue-czbui/dist/components/toast/index.js'
declare module 'vue-czbui/dist/components/dialog/index.js'

interface Window {
  $disabled: boolean
  $timer: any
  _throttle: object
  _debounce: object
}
