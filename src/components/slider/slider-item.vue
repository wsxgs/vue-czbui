<template>
    <div class="slider-item">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
export default {
  name: 'slider-item',
  mounted () {
    this.$nextTick(this.$parent.init);
  }
}
</script>
