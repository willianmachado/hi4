<template>
  <div>
    <NavBar />
    <Header />
    <ParticlesEfeito />
    <Services />
    <ServiceList />
    <Service3 />
    <Portfolio />
    <Localizacao />
    <About />
    <Footer />
    <PortfolioModals />
  </div>
</template>

<script>
import ParticlesEfeito from '../components/ParticlesEfeito.vue'
export default {
  components: { ParticlesEfeito },
  name: 'IndexPage'
}
</script>
