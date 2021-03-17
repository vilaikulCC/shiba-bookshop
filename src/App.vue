<template>
  <v-app>
    <v-main>
      <add-items />
    </v-main>
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
