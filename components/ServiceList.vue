<template>
  <section id="services" class="page-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase" data-rellax-speed="10">
          Services
        </h2>
        <hr>
        <h3 class="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>

      <div id="pricing-table" class="row">
        <div class="col-md-3 col-xs-6" data-aos="flip-left" data-aos-offset="100" data-aos-delay="300">
          <ul class="plan plan1">
            <li class="plan-name">
              <h3>Manutenção</h3>
            </li>
            <li class="plan-price">
              <img src="img/giphy.gif" alt="" width="270" height="160" class="giphy-embed">
            </li>
            <li><strong>50000GB</strong> Formatação</li>
            <li><strong>1GB</strong> Limpeza física</li>
            <li><strong>400GB</strong> Reparo de hardware</li>
            <li><strong>10</strong> Backup</li>
            <li><strong>Forum</strong> Limpeza de software</li>
            <li><strong>Forum</strong> Troca de peças</li>
            <li class="plan-action">
              <a href="#ServicosModal1" data-bs-toggle="modal" class="btn btn-outlined btn-primary btn-md">Saiba mais</a>
            </li>
          </ul>
        </div>
        <!--/.col-md-3-->
        <div class="col-md-3 col-xs-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="100" data-aos-delay="300">
          <ul class="plan plan2 featured">
            <li class="plan-name">
              <h3>Social mídia</h3>
            </li>
            <li class="plan-price">
              <img src="img/giphy2.gif" alt="" width="170" height="150" class="giphy-embed">
            </li>
            <li><strong>5GB</strong> Confecção de logo marca</li>
            <li><strong>1GB</strong> Flyers promocionais</li>
            <li><strong>400GB</strong> Mídias para redes sociais</li>
            <li><strong>10</strong> Edição de imagens</li>
            <li><strong>Forum</strong> Material institucional</li>
            <br>
            <li class="plan-action">
              <a href="#ServicosModal2" data-bs-toggle="modal" class="btn btn-outlined btn-primary btn-md">Saiba mais</a>
            </li>
          </ul>
        </div>
        <!--/.col-md-3-->
        <div class="col-md-3 col-xs-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="100" data-aos-delay="200">
          <ul class="plan plan3">
            <li class="plan-name">
              <h3>Edição de vídeos</h3>
            </li>
            <li class="plan-price">
              <img src="img/giphy3.gif" alt="" width="270" height="160" class="giphy-embed">
            </li>
            <li><strong>50GB</strong> Vinhetas para Youtube</li>
            <li><strong>8GB</strong> Edição para canais</li>
            <li><strong>1024GB</strong> Stories animados</li>
            <li>Pacote especial para Youtuber iniciante</li>
            <li><strong>Forum</strong> Edição de gameplay</li>
            <br>
            <li class="plan-action">
              <a href="#ServicosModal3" data-bs-toggle="modal" class="btn btn-outlined btn-primary btn-md">Saiba mais</a>
            </li>
          </ul>
        </div>
        <!--/.col-md-3-->
        <div class="col-md-3 col-xs-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="90" data-aos-offset="200">
          <ul class="plan plan4">
            <li class="plan-name">
              <h3>Criação de sites</h3>
            </li>
            <li class="plan-price">
              <img src="img/giphy4.gif" alt="" width="270" height="160" class="giphy-embed">
            </li>
            <li><strong>50GB</strong> Confecção de site personalizados</li>
            <li><strong>8GB</strong> RAM</li>
            <li><strong>1024GB</strong> Bandwidth</li>
            <li><strong>Unlimited</strong> Email Address</li>
            <li><strong>Forum</strong> Support</li>
            <br>
            <li class="plan-action">
              <a href="#ServicosModal4" data-bs-toggle="modal" class="btn btn-outlined btn-primary btn-md">Saiba mais</a>
              <!-- <div>
                <span class="price"><sup>$</sup>10</span>
                <small>month</small>
              </div> -->
            </li>
          </ul>
        </div>
        <!--/.col-md-3-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NuxtServiceList'
}
</script>
<style scoped>
/* gif link desabilitado */
.giphy-embed{
  max-width: 100%;
}
/*  */
.btn:hover {
  transform: scale(1.1);
  transition: transform 0.5s;
  /* border-style: solid; */
  /* border-color: rgb(0, 0, 0); */
}
/* qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq */
#pricing-table .plan:hover {
  transform: scale(1.06);
  transition: transform 0.3s;
  border: 3px solid #FE9300;
}
#pricing-table .plan {
  border-radius: 0;
  list-style: none;
  margin: 0 2px 20px;
  background: #004AAD;
  text-align: center;
  padding: 30px 0;
}

#pricing-table .plan li {
  padding: 5px 0;
  color: #fff;
  -webkit-transition: 300ms;
  -moz-transition: 300ms;
  -o-transition: 300ms;
  transition: 300ms;
}

#pricing-table .plan li.plan-name {
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  padding-bottom: 35px;
}

#pricing-table .plan li.plan-name h3 {
  margin: 0;
}

#pricing-table .plan li.plan-price {
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

#pricing-table .plan li.plan-price > div {
  display: inline-block;
  padding: 10px;
  font-size: 24px;
  width: 70px;
  height: 70px;
}

#pricing-table .plan li.plan-price > div sup {
  font-size: 10px;
  line-height: 10px;
}

#pricing-table .plan li.plan-price > div > small {
  display: block;
  font-size: 11px;
}

#pricing-table .plan li.plan-action {
  margin-top: 25px;
  border-top: 0;
}

#pricing-table .plan.featured {
  background-color: #202020;
}
</style>
