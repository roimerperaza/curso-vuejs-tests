Vue.component('padre', {
   template: //html
      `<div class="row mt-3">
         <div class="col-12">
            <strong>Número en el padre: {{numero}}</strong>
            <hijo></hijo>
         </div>
      </div>`,
   computed: {
      numero() {
         return store.state.numero;
      }
   },
});


Vue.component('hijo', {
   template: //html
      `<div class="row">
         <div class="col-12">
            <button type="button" class="btn btn-success" @click="$store.commit('increase')">+</button>
            <strong>Aumentar número en el hijo </strong>
         </div>
      </div>`
});


const store = new Vuex.Store({
   state: {
      numero: 10
   }, 
   mutations: {
      increase(state) {
         state.numero++;
      }
   }
});