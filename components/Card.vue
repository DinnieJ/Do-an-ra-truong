<template>
  <div class="card">
    <header class="card-header has-text-centered">
      <p class="card-header-title has-text-grey">
        {{ title }} ({{ japanName }})
      </p>
    </header>
    <div class="item card-content">
      <div class="card-content__img">
        <img class="actressimg" :src="imageUrl"/>
      </div>
      <div class="card-content__info">
        <p class="actress-info">Birthday: {{ birthday || "Unknown" }}</p>
        <p class="actress-info">Bust: {{ bust || "Unknown" }}</p>
        <p class="actress-info">Waist: {{ waist || "Unknown" }}</p>
        <p class="actress-info">Hip: {{ hip || "Unknown" }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <span>
          <a :href="siteUrl" target="_blank">Find out more about {{ title }}</a>
        </span>
      </div>
    </footer>
  </div>
</template>
<style lang="sass">
.actressimg
  width: 250px
  height: 250px
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
.card
  max-width: 50%
  margin-bottom: 30px
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
