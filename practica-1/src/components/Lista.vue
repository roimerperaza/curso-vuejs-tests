<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-end mb-2">
      <i
        title="Ordenar asc"
        class="fa fa-sort-numeric-asc ml-2 cursor-p"
        aria-hidden="true"
        @click="orderArray('asc')"
      ></i>
      <i
        title="Ordenar desc"
        class="fa fa-sort-numeric-desc ml-2 cursor-p"
        aria-hidden="true"
        @click="orderArray('desc')"
      ></i>
    </div>
    <div class="col-12">
      <ul class="list-group">
        <li v-for="(item, index) of frutas" :key="item.id" class="list-group-item">
          <div class="row">
            <div class="col-6 d-flex justify-content-start align-items-center">{{item.nombre}}</div>
            <div class="col-6 d-flex justify-content-end align-items-center">
              <span class="badge badge-dark badge-pill mr-2">{{item.cantidad}}</span>
              <button @click="increase(index)" type="button" class="btn btn-primary">
                <span>+</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-12 mt-3 d-flex justify-content-center">
      <button type="button" class="btn btn-dark btn-block" @click="reset">
        <span>Reiniciar</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Listas",
  computed: {
    ...mapState(["frutas"])
  },
  methods: {
    ...mapMutations(["increase", "reset", "orderArray"])
  }
};
</script>

<style scope>
.cursor-p {
  cursor: pointer;
}
</style>
