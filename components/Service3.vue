<!-- Please remove this file from your project -->
<template>
  <section id="services" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">
          Services
        </h2>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>

      <div class="row text-center">
        <div class="col-md-12">
          <card-servico image="img/manut.jpg" title="Manutenção" subtitle1="Qualquer que seja o problema" subtitle2="Estamos aqui para ajudar!" />
        </div>
        <div class="col-md-12">
          <card-servico image="img/servi4.jpg" title="Instalação" subtitle1="Querendo comprar algo" subtitle2="mas não sabe instalar?" subtitle3="Seus problemas acabaram!" />
        </div>
        <div class="col-md-6">
          <card-servico image="img/servi3.jpg" title="Criação de websites" subtitle1="Deixe sua marca" subtitle2="com a visibilidade que ela merece!" />
        </div>
        <div class="col-md-6">
          <card-servico image="img/servi3.jpg" title="Criação de websites" subtitle1="Deixe sua marca" subtitle2="com a visibilidade que ela merece!" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardServico from './library/CardServico.vue'
export default {
  name: 'NuxtService3',
  components: { CardServico }
}
</script>
