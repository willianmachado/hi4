<!-- Please remove this file from your project -->
<template>
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-dark fixed-top startAnimate3">
    <div class="container">
      <a class="navbar-brand" href="#top"><img src="img/logohi4.png" alt="..."></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars ms-1" />
      </button>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#services">Serviços</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#about">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#team">Time</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contato</a>
          </li>
          <li>
            <a href="#contact" class="f1" target="">
              <img src="img/whatsapp.png" class="wh" alt=""></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NuxtNavBar'
}
</script>
<style scoped>
.wh{
  height: 40px;
}
</style>
