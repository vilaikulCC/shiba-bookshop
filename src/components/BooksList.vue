<template>
  <v-container>
    <h3>Books List</h3>
    <div v-for="item in dataBooksList" :key="item.id">
      <div class="items-list" :id="`${item.id}`" v-on:click="addItem(item)">
        <img :src="`${item.cover}`" alt="" />
        <div class="item-desc">
          <p class="book_title">{{ item.title }}</p>
          <p class="book_price">
            {{ parseFloat(item.price).toFixed(2) }}
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters } from "vuex";
import { Book } from "@/interface";

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

  addItem(item: Book) {
    this.$store.dispatch("addSelectedItem", item);
  }
}
</script>

<style lang="scss" scoped>
.items-list {
  display: flex;
  flex-direction: row;
  margin: 7px 0;

  img {
    width: 50px;
    object-fit: cover;
  }
  .item-desc {
    display: block;
    text-align: left;
    padding: 5px 10px;
    .book_title::v-deep {
      font-weight: 500;
      font-family: "Bai Jamjuree", Helvetica, Arial, sans-serif;
      margin: 0;
      font-size: 0.9rem;
    }
    .book_price {
      font-weight: 600;
      margin: 0;
      color: $primary;
    }
  }
}
</style>
