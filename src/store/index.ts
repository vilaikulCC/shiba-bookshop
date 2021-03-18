import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Book, SelectedItem, SetSelectedItem } from "@/interface";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookLists: [],
    selectedItem: [] as SelectedItem[],
    total: 0,
    discount: 0,
  },
  mutations: {
    setBooksList(state, data: []) {
      state.bookLists = data;
    },
    setSelectedItem(state, data: SetSelectedItem) {
      const { index, ...other } = data;
      Vue.set(state.selectedItem, index, other);
    },
    pushItem(state, data: SelectedItem) {
      state.selectedItem.push(data);
    },
  },
  actions: {
    getAllBooks() {
      axios
        .get("https://api.jsonbin.io/b/5f3154b06f8e4e3faf2f99de")
        .then((res) => {
          this.commit("setBooksList", res.data.books);
        });
    },

    addSelectedItem(context, data: Book) {
      const index = context.state.selectedItem.findIndex(
        (item) => item.detail.id === data.id
      );

      if (index > -1) {
        const oldData = context.state.selectedItem[index];
        const newQty = oldData.qty + 1;
        const newTotal = parseFloat(oldData.detail.price) * newQty;
        const newData = {
          qty: newQty,
          total: newTotal,
          detail: data,
        };
        context.commit("setSelectedItem", {
          index,
          ...newData,
        });
      } else {
        const setData = {
          qty: 1,
          total: parseFloat(data.price),
          detail: data,
        };
        context.commit("pushItem", setData);
      }
    },
  },
  getters: {
    getBooksList(state) {
      return state.bookLists;
    },
    getSelectedItem(state) {
      return state.selectedItem;
    },
    getTotal(state) {
      return state.selectedItem.reduce((a, b) => a + b.total, 0);
    },
  },
  modules: {},
});
