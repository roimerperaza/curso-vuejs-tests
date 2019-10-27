Vue.component('saludo',{
    template: //html 
        `<div class="row">
            <div class="col-12">
                <span class="font-weight-bolder">Saludo: </span>{{saludo}}
            </div>
        </div>`,
    data(){
       return {
          saludo: 'Saludo desde Vuejs'
       };
    }
 });