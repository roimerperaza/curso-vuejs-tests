const vm = new Vue({
   el: '#app',
   data: {
      message: 'Saludo desde curso #5'
   },
   computed: {
      fnReversedMessage() {
         return this.message.split('').reverse().join('');
      }
   }
});