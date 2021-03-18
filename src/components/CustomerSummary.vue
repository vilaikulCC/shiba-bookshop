<template>
  <div class="frame-summary">
    <h3>Summary</h3>
    <div class="frame-top">
      <div v-for="item in dataSelected" :key="item.detail.id">
        <div class="items-list" :id="`${item.detail.id}`">
          <img :src="`${item.detail.cover}`" alt="" />
          <div class="item-desc">
            <p class="book_title">{{ item.detail.title }}</p>
            <p class="book_qty">X {{ item.qty }}</p>
            <p class="book_price">
              {{ item.total }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="frame-bottom">
      <div class="txt-discount"><span>Discount </span><span>0</span></div>
      <div class="txt-total">
        <span>Net </span><span>{{ dataTotal }}</span>
      </div>
      <span>Cash : </span>
      <div class="txt-change">
        <span>Change </span><span>{{ cash > 0 ? change : 0 }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component<CustomerSummary>({
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
export default class CustomerSummary extends Vue {
  cash = 0;
  dataTotal!: number;
}
</script>

<style lang="scss" scoped>
.items-list {
  display: flex;
  flex-direction: row;
  margin: 7px 0;

  img {
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
  }
  .item-desc {
    display: flex;
    align-items: center;
    text-align: left;
    padding: 0 10px;
    font-family: "Bai Jamjuree", Helvetica, Arial, sans-serif;
    .book_title {
      font-weight: 600;
      margin: 0;
      font-size: 0.9rem;
      flex: 4;
    }
    .book_qty {
      flex: 1;
      font-weight: 600;
      font-size: 0.95rem;
      padding-left: 10px;
      margin: 0;
    }
    .book_price {
      font-weight: 700;
      margin: 0;
      color: $primary;
      flex: 1;
      text-align: right;
    }
  }
}

.frame-top {
  height: calc(100vh - 250px);
  overflow-y: scroll;
  margin-right: -10px;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: $accent;
    //   background-color: transparent;
    outline: 0;
  }
}

.frame-bottom {
  font-family: "Bai Jamjuree", Helvetica, Arial, sans-serif;
  margin: 15px -15px -10px;
  padding: 15px;
  height: 185px;
  background-color: $light;
  border-radius: 15px;
  input[type="number"].inp-change {
    border-radius: 4px;
    border: 1px solid $secondary;
    padding: 5px 10px;
  }
  .txt-discount,
  .txt-total,
  .txt-change {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 0;
    span {
      font-weight: 600;
    }
  }
  .txt-change {
    padding: 15px 0;
    span {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
}
</style>
