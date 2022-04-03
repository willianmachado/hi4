<!-- Please remove this file from your project -->
<template>
  <div class="grid">
    <figure class="effect-julia">
      <img :src="image" alt="...">
      <figcaption>
        <h2><span>{{ title }}</span></h2>
        <p>{{ subtitle }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import '@/assets/css/card2.css'

export default {
  name: 'NuxtCardServico',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
