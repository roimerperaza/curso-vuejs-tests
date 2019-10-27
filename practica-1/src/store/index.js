import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    frutas: [
      {
        id: 0,
        nombre: "Manzana",
        cantidad: 0
      },
      {
        id: 1,
        nombre: "Pera",
        cantidad: 0
      },
      {
        id: 2,
        nombre: "Patilla",
        cantidad: 0
      },
      {
        id: 3,
        nombre: "Melón",
        cantidad: 0
      }
    ]
  },
  mutations: {
    increase(state, index) {
      state.frutas[index].cantidad++;
    },
    reset(state) {
      state.frutas.map(fruta => (fruta.cantidad = 0));
    },
    orderArray(state, type) {
      if (type === "asc") {
        return state.frutas.sort((a, b) => a.cantidad - b.cantidad);
      } else {
        return state.frutas.sort((a, b) => b.cantidad - a.cantidad);
      }
    }
  },
  actions: {},
  modules: {}
});
