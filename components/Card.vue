<template>
  <div class="box has-background-dark">
    <header class="card-header has-text-centered">
      <p class="card-header-title has-text-primary">
        {{ title }} ({{ japanName }})
      </p>
    </header>
    <nuxt-link to="/" class="item card-content">
      <figure class="image is-squared">
        <img class="is-rounded" :src="imageUrl"/>
      </figure>
      <div class="card-content__info">
        <p class="actress-info has-text-primary">Birthday: {{ birthday || "Unknown" }}</p>
        <p class="actress-info has-text-primary">Bust: {{ bust || "Unknown" }}</p>
        <p class="actress-info has-text-primary">Waist: {{ waist || "Unknown" }}</p>
        <p class="actress-info has-text-primary">Hip: {{ hip || "Unknown" }}</p>
      </div>
    </nuxt-link>
    <footer class="card-footer">
      <div class="card-footer-item">
        <span>
          <a class="has-text-white" :href="siteUrl" target="_blank">Find out more about {{ title }}</a>
        </span>
      </div>
    </footer>
  </div>
</template>
<style lang="sass">
.card-content
  display: flex
  justify-content: center
  align-items: center
  &__img
    margin-right: 30px
  &__info
    margin-left: 30px
.actress-info
  line-height: 30px
</style>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    siteUrl: {
      type: String,
      required: true
    },
    japanName: {
      type: String,
      required: true
    },
    birthday: {
      type: String,
      required: false
    },
    bust: {
      type: String,
      required: false
    },
    waist: {
      type: String,
      required: false
    },
    hip: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    }
  }
}
</script>
