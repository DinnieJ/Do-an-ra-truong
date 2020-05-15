<template>
  <section class="section">
    <b-loading :is-full-page="true" :active.sync="isLoading" >
      <b-icon
          pack="fas"
          icon="spinner"
          size="is-large"
          custom-class="fa-spin"
      >
      </b-icon>
    </b-loading>
    <div v-show="!isLoading">
      <not-found v-if="(list.count == 0)" />
      <div v-else class="result-list">
          <div class="large-title">Search result for {{ this.$route.query.keyword }}</div>
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
  max-width: 100%
.list-actress
  display: flex
  flex-wrap: wrap
  justify-content: space-evenly
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
  methods: {
    openLoading () {
    }
  },
  async mounted () {
    const result = await searchActress(this.$route.query.keyword)
    this.list = result.data
    this.isLoading = false
  }
}
</script>
