<template>
  <div class="mt-5">
    <b-row>
      <b-col cols="12" md="10" class="d-flex justify-content-center">
        <h4>FORMULARIOS</h4>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <!-- INPUT -->
      <b-col cols="12" md="4" lg="3">
        <b-row>
          <b-col cols="12">
            <span>{{ texto }}</span>
          </b-col>

          <b-col cols="12">
            <b-form-input v-model="texto" type="text" :state="validateInput" />
          </b-col>
        </b-row>
      </b-col>

      <!-- SELECT -->
      <b-col cols="12" md="4" lg="3">
        <div v-if="animalSelected">
          Option Selected:
          <strong>{{ animalSelected }}</strong>
        </div>
        <b-form-select v-model="animalSelected" :options="animales" size="md" />
      </b-col>

      <!-- RADIO -->
      <b-col cols="12" md="4" lg="3">
        <div v-if="radioSelected">
          Option Selected:
          <strong>{{ radioSelected }}</strong>
        </div>
        <b-form-radio-group
          v-model="radioSelected"
          :options="animalesRadio"
        ></b-form-radio-group>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <!-- CHECKBOX -->
      <b-col cols="12" md="4" lg="3">
        <div v-if="checkboxSelected.length > 0">
          Option Selected:
          <strong>{{ checkboxSelected }}</strong>
        </div>
        <b-form-checkbox-group
          v-model="checkboxSelected"
          :options="animalesRadio"
        ></b-form-checkbox-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Forms",
  data() {
    return {
      texto: "",
      animalSelected: null,
      animales: [
        {
          text: "Seleccione un animal",
          value: null
        },
        {
          text: "Guau guau",
          value: "perro"
        },
        {
          text: "Miau miau",
          value: "gato"
        },
        {
          text: "Cuack",
          value: "pato  "
        }
      ],
      radioSelected: null,
      animalesRadio: [
        {
          text: "Guau guau",
          value: "perro"
        },
        {
          text: "Miau miau",
          value: "gato"
        },
        {
          text: "Cuack",
          value: "pato  "
        }
      ],
      checkboxSelected: [],
      animalesCheckbox: [
        {
          text: "Guau guau",
          value: "perro"
        },
        {
          text: "Miau miau",
          value: "gato"
        },
        {
          text: "Cuack",
          value: "pato  "
        }
      ]
    };
  },
  computed: {
    validateInput() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>
