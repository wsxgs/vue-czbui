<template>
  <div class="search page">
    <Search @fillSearchValue="fillSearchValue"></Search>
  </div>
</template>

<script>
export default {
  name: 'search',
  methods: {
    fillSearchValue (searchValue) {
      console.log(searchValue)
    }
  },
  mounted () {
    setTimeout(() => {
      // 关闭loading
      this.$store.commit('toggleLoaingStatus', false)
    }, 500)
  }
}
</script>
