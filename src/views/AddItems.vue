<template>
  <v-container fluid class="d-flex flex-column">
    <div class="frame-main">
      <BookLists />
      <CheckoutList />
    </div>
    <div class="frame-customer">
      <Advertising />
      <CustomerSummary />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookLists from "@/components/BooksList.vue";
import CheckoutList from "@/components/CheckoutList.vue";
import Advertising from "@/components/Advertising.vue";
import CustomerSummary from "@/components/CustomerSummary.vue";

@Component({
  components: {
    BookLists,
    CheckoutList,
    Advertising,
    CustomerSummary,
  },
})
export default class AddItems extends Vue {}
</script>

<style lang="sass" scoped></style>
