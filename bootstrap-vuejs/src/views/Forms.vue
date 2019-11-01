<template>
  <div class="mt-5">
    <b-row>
      <b-col cols="12" md="10">
        <h4>FORMULARIOS</h4>
      </b-col>

      <b-col cols="12">
        <span>{{ texto }}</span>
      </b-col>

      <b-col cols="12">
        <b-form-input type="text" v-model="texto" :state="validateInput"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "forms",
  data() {
    return {
      texto: ""
    };
  },
  computed: {
    validateInput() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>
