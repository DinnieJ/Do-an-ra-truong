<template>
  <section>
    <b-field position="is-centered">
      <b-input
        placeholder="Find your stuff..."
        type="search"
        icon="search"
        size="is-large"
        v-model="keyword"
      >
      </b-input>
      <p class="control is-large">
        <b-button size="is-large" type="is-primary" @click="search()">
          Search
        </b-button>
      </p>
    </b-field>
  </section>
</template>
<script>
export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    search () {
      if (this.keyword) {
        this.$router.push({
          name: 'actress',
          query: {
            keyword: this.keyword
          }
        })
      }
    }
  }
}
</script>
