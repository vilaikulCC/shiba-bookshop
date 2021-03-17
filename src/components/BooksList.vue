<template>
  <v-container>
    <h3>Books List</h3>
    <div v-for="item in dataBooksList" :key="item.id">
      <img :src="`${item.cover}`" alt="" />
      <p>{{ item.title }}</p>
      <span>{{ item.price }}</span>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters({
      dataBooksList: "getBooksList",
    }),
  },
})
export default class BookLists extends Vue {
  dataBooksList!: [];

  mounted() {
    this.$store.dispatch("getAllBooks");
    console.table(this.dataBooksList);
  }
}
</script>

<style lang="scss" scoped></style>
