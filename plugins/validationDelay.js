import Vue from 'vue'

const touchMap = new WeakMap()

Vue.prototype.$delayTouch = function ($v) {
    $v.$reset()
    if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v))
    }
    touchMap.set($v, setTimeout($v.$touch, 450))
}
