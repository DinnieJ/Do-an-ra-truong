<template>
  <section class="section">
    <b-loading :is-full-page="true" :active.sync="isLoading">
      <b-icon pack="fas" icon="spinner" size="is-large" custom-class="fa-spin">
      </b-icon>
    </b-loading>
    <div v-show="!isLoading">
      <not-found v-if="list.count == 0" />
      <div v-else class="result-list">
        <div class="large-title has-text-white">
          Search result for {{ this.$route.query.keyword }}
        </div>
        <div class="list-actress">
          <card
            v-for="item in list.result"
            :key="item.id"
            :title="item.name"
            :siteUrl="item.siteUrl"
            :imageUrl="item.imageUrl"
            :japanName="item.japanName"
            :bust="item.bust"
            :waist="item.waist"
            :hip="item.hip"
            :height="item.height"
            :birthday="item.birthday"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="sass">
.result-list
  min-width: 80%
  max-width: 100%
.list-actress
  display: flex
  flex-wrap: wrap
.box
  min-width: 400px
  min-height: 320px
  margin: 20px
</style>
<script>
import Card from '~/components/Card'
import NotFound from '~/components/Common/NotFound'
import { searchActress } from '~/api/search'
export default {
  name: 'HomePage',

  components: {
    Card,
    NotFound
  },
  data () {
    return {
      list: {},
      isLoading: true
    }
  },
  methods: {},
  async mounted () {
    await searchActress(this.$route.query.keyword)
      .then((response) => {
        this.list = response.data
      })
      .catch((error) => {
        alert(error)
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
</script>
