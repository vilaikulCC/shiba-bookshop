import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookLists: [],
  },
  mutations: {
    setBooksList(state, data: []) {
      state.bookLists = data;
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
  },
  getters: {
    getBooksList(state) {
      return state.bookLists;
    },
  },
  modules: {},
});
