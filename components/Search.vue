<template>
  <section>
    <b-field position="is-centered">
      <b-autocomplete
        placeholder="Find your stuff..."
        type="search"
        icon="search"
        size="is-large"
        v-model="keyword"
        @typing="getSuggest"
        @keydown.native.enter="search"
        :data="filterActressName"
        :loading="isFetching"
      >
      </b-autocomplete>
      <p class="control is-large">
        <b-button size="is-large" type="is-primary" @click="search()">
          Search
        </b-button>
      </p>
    </b-field>
  </section>
</template>
<script>
import debounce from 'lodash/debounce'
import { getSuggestActress } from '~/api/search'
export default {
  data () {
    return {
      keyword: '',
      list: [],
      isFetching: false
    }
  },
  methods: {
    search () {
      const key = this.keyword.trim().replace(/\s+/g, '').toLowerCase()
      this.$router.push({
        name: 'actress',
        query: {
          keyword: key
        }
      })
    },
    getSuggest: debounce(function (keyword) {
      if (!keyword) {
        return
      }
      this.isFetching = true
      const key = keyword.trim().replace(/\s+/g, '')
      getSuggestActress(key).then((success) => {
        this.list = success.data.result.map(function (item) {
          return item.name
        })
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.isFetching = false
      })
    }, 500)
  },
  computed: {
    filterActressName () {
      return this.list.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .trim()
          .includes(this.keyword.toLowerCase().trim())
      })
    }
  }
}
</script>
