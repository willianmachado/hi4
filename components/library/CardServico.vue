<!-- Please remove this file from your project -->
<template>
  <div class="grid">
    <figure class="effect-julia">
      <img :src="image" alt="...">
      <figcaption>
        <h2><span>{{ title }}</span></h2>
        <p v-if="subtitle1">
          {{ subtitle1 }}
        </p>
        <p v-if="subtitle2">
          {{ subtitle2 }}
        </p>
        <p v-if="subtitle3">
          {{ subtitle3 }}
        </p>
        <p v-if="subtitle4">
          {{ subtitle4 }}
        </p>
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
    subtitle1: {
      type: String,
      default: ''
    },
    subtitle2: {
      type: String,
      default: ''
    },
    subtitle3: {
      type: String,
      default: ''
    },
    subtitle4: {
      type: String,
      default: ''
    }
  }
}
</script>
