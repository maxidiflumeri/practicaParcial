import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        contactos : []        
    },
    actions : {
        getContactos({commit}, listaContactos) {
            commit('getContactosMutacion', listaContactos)
        },
        borrarContacto({commit}, id) {
            commit('borrarContacto', id)
        },

    },
    mutations : {
        getContactosMutacion(state, listaContactosMutacion) {
            state.contactos = listaContactosMutacion            
        },
        borrarContacto(state, id){
            let offset = state.contactos.findIndex(usuario => usuario.id == id)
            state.contactos.splice(offset, 1)
        }
    }
})