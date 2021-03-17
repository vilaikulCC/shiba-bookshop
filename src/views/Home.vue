<template>
  <div class="home">
    <img alt="Shiba Book Shop logo" src="../assets/logo.png" />
    Shiba Book Shop
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
