<template>
  <div class="frame-booklist">
    <h3>All Books</h3>
    <div class="list-book">
      <div
        v-for="item in dataBooksList"
        :key="item.id"
        div
        class="items-list"
        :id="`${item.id}`"
        v-on:click="addItem(item)"
      >
        <img :src="`${item.cover}`" alt="" />
        <div class="item-desc">
          <p class="book_title">{{ item.title }}</p>
          <p class="book_price">
            {{ item.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
.list-book {
  display: flex;
  flex-wrap: wrap;

  overflow-y: scroll;
  padding-bottom: 15px;
  height: calc(100vh - 160px);
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
    outline: 0;
  }
}
.items-list {
  flex-direction: row;
  margin: 7px 0;
  flex: 0 0 calc(25% - 15px);
  margin-right: 15px;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 15px;
  }
  .item-desc {
    display: block;
    text-align: left;
    padding: 5px 10px;
    font-family: "Bai Jamjuree", Helvetica, Arial, sans-serif;
    .book_title {
      font-weight: 600;
      margin: 0;
      font-size: 0.9rem;
    }
    .book_price {
      font-weight: 700;
      margin: 0;
      color: $primary;
    }
  }
}
</style>
