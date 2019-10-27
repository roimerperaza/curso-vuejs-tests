Vue.component('hijo', {
    template: //template 
        `<div class="row bg-success pb-2 pt-2">
            <div class="col-12">
                <span>{{titulo}}</span> <br>
                <span>
                    <strong>Name del componente hijo:</strong> {{name}}<br>
                </span>
                <span>
                    <strong>Numero que recibo del padre:</strong> {{numero}}
                </span>
                <input class="form-control" type="text" v-model="name">
            </div>
        </div>`,
    props: ['numero'],
    data(){
        return {
            name: 'ROIMER PERAZA',
            titulo: 'COMPONENTE HIJO'
        };
    },
    mounted() {
        this.$emit('nombreHijo', this.name);
    },
    beforeUpdate() {
        console.log('CAMBIANDO...');
    },
    updated() {
        this.$emit('nombreHijo', this.name);
    },
});