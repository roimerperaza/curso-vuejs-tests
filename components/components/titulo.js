Vue.component('titulo',{
    template: //html 
        `<div class="row mb-3">
            <div class="col-12 d-flex justify-content-center">
                <h1 class="font-weight-bolder">{{titulo}}</h1>
            </div>
        </div>`,
    data(){
       return {
          titulo: 'COMPONENTES'
       };
    }
 });