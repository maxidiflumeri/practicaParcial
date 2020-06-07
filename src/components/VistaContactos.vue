<template>

  <section class="src-components-vista-contactos">
   <div class="jumbotron m-3 bg-secondary">
      <h1 class="text-white">Lista de Contactos</h1>       
      <br>    
     
      <div  v-if="this.hayContactos==0" class="spinner-border text-white" role="status">
        <span class="sr-only">Loading...</span>
      </div> 
      
      <table class="table" v-else-if="this.hayContactos==1">
        <thead>
          <tr>
            <th class="text-white">ID</th>
            <th class="text-white">Nombre</th>
            <th class="text-white">Apellido</th>
            <th class="text-white">Edad</th>
            <th class="text-white">Dirección</th>
            <th class="text-white">Telefono</th>
            <th class="text-white">Correo Electrónico</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in this.$store.state.contactos" :key="index">
            <td class="text-white" scope="row">{{ usuario.id }}</td>
            <td class="text-white">{{usuario.nombre |pasarAminuscula |pasarMayus }}</td>
            <td class="text-white">{{usuario.apellido |pasarAminuscula |pasarMayus}}</td>
            <td class="text-white">{{usuario.edad}}</td>
            <td class="text-white">{{usuario.direccion}}</td>
            <td class="text-white">{{usuario.telefono}}</td>
            <td class="text-white">{{usuario.email}}</td>
            <td class="text-white"> <button class="btn btn-danger" @click="borrar(usuario.id)">X</button> </td>
          </tr>
        </tbody>

      </table>     

      <div v-else class="alert alert-danger">
        NO HAY USUARIOS
      </div>
   </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-vista-contactos',
    props: [],
    mounted () {
      this.getContactos()    

    },
    data () {
      return {
        hayContactos: 0

      }
    },
    methods: {
      getContactos(){
        this.axios.get('https://5eb71233875f1a00167e1351.mockapi.io/Usuarios')
        .then(res => {
            this.$store.dispatch('getContactos', res.data) 
            if(this.$store.state.contactos != 0){
              this.hayContactos = 1  
            }else{
              this.hayContactos = 2
            }       
            console.log(this.$store.state.contactos)      
        })
        .catch(error => {
            console.log('ERROR GET', error)
        })  
      },

      borrar(id) {
        this.axios.delete('https://5eb71233875f1a00167e1351.mockapi.io/Usuarios/'+id)
        .then( res => {
          console.log(res.data)  
          this.$store.dispatch('borrarContacto', id)        
          if(this.$store.state.contactos == 0){
            this.hayContactos = 2
          }
        })
        .catch(error => {
          console.log('ERROR DELETE HTTP', error)
        })
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">


</style>
