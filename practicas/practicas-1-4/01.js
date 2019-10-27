const app = new Vue({
   el: '#app',
   data: {
      titulo: 'Hola mundo con Vuejs',
      descriptionTotalFruits: 'Esta es la suma de todas las frutas.',
      frutas: [{
         cantidad: 15,
         name: 'mango'
      }, {
         cantidad: 21,
         name: 'parchita'
      }, {
         cantidad: 33,
         name: 'fresa'
      }],
      nuevaFruta: '',
      cantNuevaFruta: 0,
      total: 0,
      background: 'bg-warning',
      color: false
   },
   methods: {
      fnAddFruta() {
         if (this.nuevaFruta !== '') {
            this.frutas.push({
               cantidad: (this.cantNuevaFruta) ? this.cantNuevaFruta: 0,
               name: this.nuevaFruta
            });

            this.cantNuevaFruta = 0;
            this.nuevaFruta = '';
         }
      }
   },
   computed: {
      fnSumarFrutas(){
         return this.frutas.reduce((sum, fruta) => {
            return sum + fruta.cantidad;
         }, 0);
      }
   }
});