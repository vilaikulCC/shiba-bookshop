<template>
  <v-container class="">
    <h3>Checkout</h3>
    <div>
      <div v-for="item in dataSelected" :key="item.detail.id">
        <div class="items-list" :id="`${item.detail.id}`">
          <!-- <img :src="`${item.detail.cover}`" alt="" /> -->
          <div class="item-desc">
            <p class="book_title">{{ item.detail.title }}</p>
            <p>X {{ item.qty }}</p>
            <p class="book_price">
              {{ parseFloat(item.total).toFixed(2) }}
            </p>
          </div>
        </div>
      </div>
      <h4>Discount</h4>
      <h4>Net {{ dataTotal }}</h4>
    </div>

    <div>
      <input type="number" v-model="cash" />
      <p>
        Change <span>{{ cash > 0 ? change : 0 }}</span>
      </p>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters } from "vuex";

@Component<CheckoutList>({
  computed: {
    ...mapGetters({
      dataSelected: "getSelectedItem",
      dataTotal: "getTotal",
    }),
    change() {
      return this.cash - this.dataTotal;
    },
  },
})
export default class CheckoutList extends Vue {
  cash = 0;
  dataTotal!: number;
}
</script>

<style lang="scss" scoped></style>
