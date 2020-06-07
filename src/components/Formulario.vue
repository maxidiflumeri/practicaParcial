<template>

  <section class="src-components-formulario">
    <div class="jumbotron m-3 bg-secondary">
      <h1 class="text-white">Alta de Usuario</h1>
      <hr />
      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
          <label for="nombre" class="mt-3 text-white">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            name="nombre"
            autocomplete="off"
            v-model.trim="formData.nombre"
            :maxlength="nombreChrMax"
            :minlength="nombreChrMin"
            required
          />

          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>            
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
            <div v-if="formData.nombre.length == nombreChrMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="apellido" class="mt-3 text-white">Apellido</label>
          <input
            type="text"
            class="form-control"
            id="apellido"
            name="apellido"
            autocomplete="off"
            v-model.trim="formData.apellido"
            required
          />

          <field-messages name="apellido" show="$dirty">      
            <div slot="required" class="alert alert-danger my-1">Campo apellido requerido</div>
          </field-messages>

        </validate>

        <validate tag="div">
          <label for="direccion" class="mt-3 text-white">Direccion</label>
          <input
            type="text"
            class="form-control"
            id="direccion"
            name="direccion"
            autocomplete="off"
            v-model.trim="formData.direccion"
            required
          />

          <field-messages name="direccion" show="$dirty">      
            <div slot="required" class="alert alert-danger my-1">Campo direccion requerido</div>
          </field-messages>

        </validate>

        <validate tag="div">
          <label for="edad" class="mt-3 text-white">Edad</label>
          <input
            type="number"
            class="form-control"
            id="edad"
            name="edad"
            autocomplete="off"
            v-model.trim="formData.edad"
            :min="edadMin"
            :max="edadMax"
            required
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo edad requerido</div>
            <div slot="min" class="alert alert-danger my-1">La edad minima es de {{edadMin}} años</div>
            <div slot="max" class="alert alert-danger my-1">La edad máxima es de {{edadMax}} años</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="telefono" class="mt-3 text-white">Telefono</label>
          <input
            type="text"
            class="form-control"
            id="telefono"
            name="telefono"
            autocomplete="off"
            v-model.trim="formData.telefono"
            required
          />

          <field-messages name="telefono" show="$dirty">      
            <div slot="required" class="alert alert-danger my-1">Campo telefono requerido</div>
          </field-messages>

        </validate>

        <validate tag="div">
          <label for="email" class="mt-3 text-white">Correo Electrónico</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            autocomplete="off"
            v-model="formData.email"            
            required
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Correo Electrónico requerido</div>
            <div slot="email" class="alert alert-danger my-1">Correo Electrónico no válido</div>
          </field-messages>
        </validate>

        <br>
        <button class="btn btn-success mt-3" type="submit" :disabled="formState.$invalid">Agregar Usuario</button>

      </vue-form>      
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getDatosIniciales(),
        nombreChrMin: 5,
        nombreChrMax: 20,
        edadMin: 10,
        edadMax: 100
      }
    },
    methods: {
      getDatosIniciales(){
        return {
          nombre: '',
          apellido: '',
          edad: '',
          direccion: '',
          telefono: '',
          email: ''
        }
      },
      enviar() {
        console.log(this.formData)
        this.axios.post('https://5eb71233875f1a00167e1351.mockapi.io/Usuarios/', this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
          this.formData = this.getDatosIniciales()
          this.formState._reset()
        })
        .catch(error => {
          console.log('ERROR POST', error)
        })
      },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  hr{
    background-color: white;
  }
</style>
