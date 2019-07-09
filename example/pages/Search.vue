<template>
  <div class="search">
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
  }
}
</script>
