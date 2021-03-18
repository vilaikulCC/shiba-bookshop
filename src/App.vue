<template>
  <v-app class="bg">
    <div class="nav">
      <img src="/imgs/shiba_book.png" alt="" class="nav-logo" />
      <span>Shiba Book Shop</span>
    </div>
    <v-main>
      <add-items />
    </v-main>

    <div class="credit">
      <a href="https://www.freepik.com/vectors/baby" class="ext-credit"
        >Baby vector created by catalyststuff - www.freepik.com</a
      >
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AddItems from "./views/AddItems.vue";

export default Vue.extend({
  name: "App",

  components: {
    AddItems,
  },

  data: () => ({
    //
  }),
});
</script>
