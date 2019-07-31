<template>
  <div class="search">
    <div class="weui-search-bar" :class="{'weui-search-bar_focusing': isFocusing}" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input
            type="search"
            class="weui-search-bar__input"
            id="searchInput"
            placeholder="搜索"
            ref="searchInput"
            v-model="searchValue"
            @input="fillSearchValue()"
            @blur="searchInputBlur()"
            required
          />
          <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" id="searchText" @click="searchInputFocus()">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a
        href="javascript:"
        class="weui-search-bar__cancel-btn"
        id="searchCancel"
        @click="cancel()"
      >取消</a>
    </div>
  </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers'
export default {
  name: 'Search',
  data () {
    return {
      searchValue: '', // 搜索框值
      isFocusing: false, // 输入框是否聚焦
      timer: null
    }
  },
  methods: {
    /**
     * 输入框聚焦
     */
    searchInputFocus () {
      this.isFocusing = true
      let searchInput = this.$refs.searchInput
      searchInput.focus()
    },
    /**
     * 输入框失焦
     */
    searchInputBlur () {
      if (!this.searchValue) {
        this.isFocusing = false
      }
    },
    /**
     * 返回按钮点击
     */
    cancel () {
      this.searchValue = ''
      this.isFocusing = false
    },
    /**
     * 输入搜索内容
     */
    fillSearchValue () {
      // 防抖
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.transmitSearchValue()
      }, 500)
    },
    /**
     * 传递搜索值给父组件 通过fillSearchValue方法
     */
    transmitSearchValue () {
      if (!this.searchValue) {
        return
      }
      this.$emit('fillSearchValue', this.searchValue)
    }
  }
}
</script>
