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
        <div>
              <card-servico image="img/servi2.jpg" title="Manutenção" subtitle="Qualquer que seja o problema estamos aqui para ajudar!" />
        </div>
        <div>
            <card-servico image="img/servi1.jpg" title="Instalação" subtitle="Querendo comprar algo mas com medo de não saber instalar? Seus problemas acabaram" />
        </div>
        <div>
            <card-servico image="img/servi3.jpg" title="Criação de websites" subtitle="Deixe sua marca com a visibilidade que ela merece!" />
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
