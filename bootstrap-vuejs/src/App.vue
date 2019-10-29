<template>
  <div id="app">
    <Navbar :menu="arrayMenu" />
    <!-- ROUTER VIEW -->
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      arrayMenu: [
        {
          name: "Home",
          route: "/"
        },
        {
          name: "About",
          route: "about"
        },
        {
          name: "Grid",
          route: "grid"
        },
        {
          name: "Card",
          route: "card"
        }
      ]
    };
  }
};
</script>
