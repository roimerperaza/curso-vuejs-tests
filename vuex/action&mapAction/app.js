Vue.component('padre', {
   template: //html
      `<div class="row mt-3">
         <div class="col-12">
            <strong>Número en el padre: {{numero}}</strong>
            <hijo></hijo> <br>
            <ul v-for="curso of cursos">
               <li>
                  <span>
                     <b>Id:</b> {{curso.id}} <br>
                     <b>Name:</b> {{curso.name}} <br>
                     <b>Curso:</b> {{curso.curso}}
                  </span>
               </li>
            </ul>
            <button type="button" class="btn btn-primary" @click="getCursos">Obtener cursos</button>
         </div>
      </div>`,
   computed: {
      ...Vuex.mapState(['numero', 'cursos']),
   },
   methods: {
      ...Vuex.mapActions(['getCursos'])
   },
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
      numero: 10,
      cursos: []
   }, mutations: {
      decrease(state, n) {
         state.numero-=n;
      },
      increase(state,n) {
         state.numero+=n;
      },
      setCursos(state, cursosAction){
         state.cursos = cursosAction;
      }
   }, actions:{
      getCursos: async function({commit}) {
         const data = await fetch('data.json');
         const cursos = await data.json();
         console.log(cursos);
         commit('setCursos', cursos);
      }
   }
});