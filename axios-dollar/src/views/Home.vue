<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12 mb-2>
        <v-btn color="info" @click="changeIdioma">Change calendar language</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-date-picker
            v-model="date"
            full-width
            :locale="idioma"
            :min="minimium"
            :max="maximium"
            @change="getDollar(date)"
          ></v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="title text-center">{{dollarValue}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      idioma: 'es',
      minimium: '1984',
      maximium: new Date().toISOString().substr(0, 10),
      dollarValue: null
    }
  },
  methods: {
    ...mapMutations(['showLoading', 'hideLoading']),
    changeIdioma () {
      this.idioma = (this.idioma === 'es') ? 'en' : 'es'
    },

    async getDollar (day) {
      const arrayDate = day.split('-')
      const ddmmyy = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`
      try {
        this.showLoading({ title: 'Searching Information', colour: 'secondary' })
        let data = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
        this.dollarValue = (data && data.data && data.data.serie.length > 0) ? `${data.data.serie[0].valor}$` : 'Sin resultados'
      } catch (error) {
        this.dollarValue = 'Sin resultados'
      } finally {
        this.hideLoading()
      }
    }
  },
  created () {
    this.getDollar(this.date)
  }
}
</script>
