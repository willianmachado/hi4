<!-- Please remove this file from your project -->
<template>
  <header class="masthead">
    <div class="container">
      <div class="banner">
        <video autoplay loop muted>
          <source src="img/loopCircuit2.mp4" style="width: 100%" type="video/mp4">
        </video>
      </div>
      <div class="masthead-subheading">
        Reparando e Construindo o seu mundo digital
      </div>
      <div class="masthead-heading text-uppercase">
        <font color="#5598F5">
          Hi
        </font>
        <font color="#F58A3C">
          Four
        </font>
        <br>
        <vue-typer :text="['Manutenção de Computadores', 'Montagem de Computadores', 'Backup de Dados', 'Recuperação de Sistemas', 'Edição de vídeo', 'Criação de Websites']" />
      </div>
      <a class="btn btn-primary btn-xl text-uppercase" href="#services">Serviços</a>
    </div>
  </header>
</template>

<script>
// import VueTyperPlugin from 'vue-typer'
// import Vue from 'Vue'
// Vue.use(VueTyperPlugin)
import '@/assets/css/typerStyle.css'

export default {
  name: 'NuxtPart'
}
</script>
