Vue.component('padre', {
   template: //html
      `<div class="row mt-3">
         <div class="col-12">
            <strong>Número en el padre: {{numero}}</strong>
            <hijo></hijo>
         </div>
      </div>`,
   computed: {
      ...Vuex.mapState(['numero'])
   }
});


Vue.component('hijo', {
   template: //html
      `<div class="row">
         <div class="col-12">
            <button type="button" class="btn btn-danger" @click="decrease(2)">-</button>
            <button type="button" class="btn btn-success" @click="increase(4)">+</button>
            <strong>Número en el hijo ({{numero}}) </strong>
         </div>
      </div>`,
   computed: {
      ...Vuex.mapState(['numero'])
   },
   methods: {
      ...Vuex.mapMutations(['increase', 'decrease'])
   },
});


const store = new Vuex.Store({
   state: {
      numero: 10
   }, mutations: {
      decrease(state, n) {
         state.numero-=n;
      },
      increase(state,n) {
         state.numero+=n;
      }
   }
});