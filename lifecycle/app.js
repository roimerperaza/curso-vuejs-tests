const vm = new Vue({
   el: '#app',
   data: {
      message: 'Soy ciclo de vida de Vue'
   },
   beforeCreate() {
      console.log('---BEFORE CREATE---');
   },
   created() {
      // Al crear los métodos, observadores y eventos, pero aún no accede al Dom.
      // Aún no se puede a 'el'
      console.log('---CREATED---');
   },
   beforeMount() {
      // Se ejecuta antes de insertar el Dom
      console.log('---BEFORE MOUNT---');
   },
   mounted() {
      // Se ejecuta al insertar el Dom
      console.log('---MOUNTED---');
   },
   beforeUpdate() {
      // Al detectar un cambio
      console.log('---BEFORE UPDATE---');
   },
   updated() {
      // Al realizar los cambios
      console.log('---UPDATED---');
   },
   beforeDestroy() {
      // Antes de Destruir la instancia
      console.log('---BEFORE DESTROY---');
   },
   destroyed() {
      // Se destruye toda la instancia
      console.log('---VUE HAS BE DESTROYED---');
   },
   methods: {
      fnDestruir(){
         this.$destroy();
      }
   },
});