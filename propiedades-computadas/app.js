const vm = new Vue({
   el: '#app',
   data: {
      message: 'Hola, este es un mensaje desde Vuejs',
      contador: 0
   },
   methods:{
      fnIncrease(){
         return (this.contador === 100) ? this.contador = this.contador : this.contador+= 10;
      },
      fnDecrease(){
         return (this.contador === 0) ? this.contador = this.contador : this.contador+= -10;
      }
   },
   computed: {
      cmpReversedMessage() {
         return this.message.split('').reverse().join('');
      },
      cmpColor() {
         return {
            'bg-success': this.contador <= 30,
            'bg-warning': this.contador > 30 && this.contador < 60,
            'bg-danger': this.contador >= 60
         };
      }
   }
});