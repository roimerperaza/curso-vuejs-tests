Vue.component('padre', {
    template: //template 
        `<div class="row p-5 bg-dark text-white">
            <div class="col-12 mt-1">
                <span>{{titulo}}</span> <br>
                <span>
                    <strong>Número del componente padre:</strong> {{numeroPadre}}<br>
                </span>
                <span>
                    <strong>Nombre viene del componente hijo:</strong> {{nombreHijo}} <br>
                </span>
                <button type="button" class="btn btn-danger" @click="numeroPadre--">Decrease</button>
                <button type="button" class="btn btn-success" @click="numeroPadre++">Increase</button>
            </div>

            <div class="col-12 mt-5">
                <hijo :numero="numeroPadre" @nombreHijo="nombreHijo = $event"></hijo>
            </div>
            
        </div>`,
    data() {
        return {
            titulo: 'COMPONENTE PADRE',
            numeroPadre: 23,
            nombreHijo: ''
        };
    }
});