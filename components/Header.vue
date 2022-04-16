<!-- Please remove this file from your project -->
<template>
  <header class="masthead">
    <div class="container">
      <div class="banner">
        <video style="background-color: black !important;" autoplay loop muted class="startAnimate4">
          <source src="img/Circuit2.mp4" style="width: 100%" type="video/mp4">
        </video>
      </div>
      <!-- <div class="masthead-subheading startAnimate2">
        Reparando e Construindo o seu mundo digital
      </div> -->
      <div class="masthead-heading text-uppercase">
        <div style="display: inline-flex" class="startAnimate">
          <img src="img/logohi4tech2.png" alt="...">
        </div>
        <br>
        <div style="margin-top: 20px" class="startAnimate3">
          <vue-typer :text="['Manutenção de Computadores', 'Montagem de Computadores', 'Backup de Dados', 'Recuperação de Sistemas', 'Edição de vídeo', 'Criação de Websites']" caret-animation="phase" />
        </div>
      </div>
      <a class="btn btn-primary btn-xl text-uppercase startAnimate25" href="#services">conheça nossos serviços</a>
    </div>
  </header>
</template>
<script>
import '@/assets/css/typerStyle.css'

export default {
  name: 'NuxtPart'
}
</script>
<style scoped>
header.masthead .masthead-heading .startAnimate img{
  height: 100px;
}
</style>
