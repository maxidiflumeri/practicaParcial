<template>

  <section class="src-components-nav-bar">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">APP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/Formulario" tag="li">
                <a class="nav-link" href="#">Formulario</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/VistaContactos" tag="li">
                <a class="nav-link" href="#">Contactos</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
