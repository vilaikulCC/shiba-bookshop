<template>
  <div class="frame-ads">
    <img src="/imgs/shiba_book.png" alt="" class="banner-logo" />
    <h4>Save the World!</h4>
    <p>Skip the Slip</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Advertising extends Vue {}
</script>

<style lang="scss" scoped>
h4 {
  font-size: 2rem;
}
p {
  font-weight: 500;
  font-size: 1.25rem;
}
.banner-logo {
  height: 100px;
}
</style>
