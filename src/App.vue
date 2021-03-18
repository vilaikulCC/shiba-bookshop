<template>
  <v-app>
    <v-main>
      <add-items />
      <a href="https://www.freepik.com/vectors/baby"
        >Baby vector created by catalyststuff - www.freepik.com</a
      >
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
