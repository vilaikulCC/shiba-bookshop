<template>
  <v-container>
    <h2>Items List</h2>
    <v-row class="text-center">
      <v-col cols="12" md="9" class="">
        <BookLists />
      </v-col>
      <v-col cols="12" md="3" class="">
        <CheckoutList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookLists from "@/components/BooksList.vue";
import CheckoutList from "@/components/CheckoutList.vue";

@Component({
  components: {
    BookLists,
    CheckoutList,
  },
})
export default class AddItems extends Vue {}
</script>

<style lang="sass" scoped></style>
