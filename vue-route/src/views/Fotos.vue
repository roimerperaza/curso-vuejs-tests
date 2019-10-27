<template>
  <div class="container">
    <h1>Galería de Fotos</h1>

    <router-link
      v-for="(item, index) of arrayPhoto"
      :key="index"
      :to="{ name: 'fotos', params: { id: item } }"
    >
      <button>Foto {{ index }}</button>
    </router-link>
    <Fotografia />

    <button @click="home">Home</button>
    <button @click="back">Back</button>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import Fotografia from "@/components/Fotografia.vue";
export default {
  components: {
    Fotografia
  },
  data() {
    return {
      arrayPhoto: [1, 2, 3]
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    back() {
      this.$router.go(-1);
    },
    next() {
      this.$router.go(1);
    }
  }
};
</script>
