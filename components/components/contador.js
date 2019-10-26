Vue.component('contador', {
   template: //html 
      `<div class="row">
         <div class="col-12">
            <span class="font-weight-bolder">Contador: </span>{{count}}
         </div>
         <div class="col-12">
         <button type="button" class="btn btn-danger" @click="count--">Decrease</button>
            <button type="button" class="btn btn-dark" @click="count++">Increase</button>
         </div>
      </div>`,
   data() {
      return {
         count: 0
      };
   }
});