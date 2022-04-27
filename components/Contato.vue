<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Clients
    <div class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="img/logos/vuejs.svg" alt="..."></a>
          </div>
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="img/logos/google.svg" alt="..."></a>
          </div>
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="img/logos/facebook.svg" alt="..."></a>
          </div>
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="img/logos/ibm.svg" alt="..."></a>
          </div>
        </div>
      </div>
    </div>
    -->
    <!-- Contact-->
    <section id="contact" class="page-section">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">
            Contato
          </h2>
          <h5 class="section-heading">
            Lorem ipsum dolor sit amet consectetur.
          </h5>
        </div>
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div class="row align-items-stretch mb-5">
            <div class="col-sm-6">
              <div class="text-center">
              <h4 class="section-heading">Nossas redes sociais</h4>
                <div class="form-group">
                  <!-- Redes socoais icones-->
                  <a href="#!"><img class="img" src="img/facebook.svg" alt=""></a>
                  <a href="#!"><img class="img" src="img/instagram.svg" alt=""></a>
                </div>
              </div>
              <div class="form-group">
                <!-- Email address input-->
                <div class="text-center">
              <h4 class="section-heading">Email</h4>
                <div class="form-group">
                  <!-- Redes socoais icones-->
                  <a href="#!"><img class="img"  src="img/gmail.svg" alt=""><br><h5>contato@hi4.com.br</h5></a>
                </div>
              </div>
              </div>
              <div class="form-group">
                <!-- Email address input-->
                <div class="text-center">
              <h4 class="section-heading">Localização</h4>
                <div class="form-group">
                  <!-- Redes socoais icones-->
                  <a href="https://www.google.com.br/maps/place/Itupeva+-+Aglomeração+Urbana+de+Jundiaí,+Itupeva+-+SP/@-23.1545651,-47.0580628,15z/data=!3m1!4b1!4m5!3m4!1s0x94cf30d56621a3c9:0xd7fe5ed81a7951c0!8m2!3d-23.1558391!4d-47.0565397" target="_blank" rel="noopener noreferrer"><img class="img" src="img/maps.png" alt=""></a>
                </div>
              </div>
              </div>
            </div>
            <div class="col-sm-1">
            </div>
            <div class="col-sm-4">
              <h4 class="section-heading">Telefone: 11 958085167</h4>
              <h4 class="section-heading">WhatsApp</h4>
              <input v-model="nome" class="form-control" placeholder="seu nome">
              <br>
              <textarea class="form-control" v-model="asb" placeholder="escreva a sua Mensagem"></textarea>
              <br>
              <div class="text-center">
              <button @click="abrirWhats" class="btn btn-primary text-uppercase" >
                enviar mensagem
                  <img src="img/whatsapp.png" alt="" id="whats">
              </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NuxtContato',
  data () {
    return {
      asb: '',
      nome: ''
    }
  },
  methods: {
    abrirWhats () {
      window.open('https://api.whatsapp.com/send?phone=5511912345678&text=' + 'nome:' + this.nome + '  Mensagem:' + this.asb, '_blank').focus()
    }
  }
}
</script>
<style scoped>
#whats{
  height: 55px;
}
.img{
  /* width: 75px; */
  height: 75px;
}
</style>
