import Vue from  'vue'

Vue.filter('pasarMayus', function(value) {
    return value.charAt(0).toUpperCase() + value.substr(1)
})
Vue.filter('pasarAminuscula', function(value) {
    return value.toLowerCase()
})