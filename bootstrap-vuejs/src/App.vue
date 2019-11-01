<template>
  <div id="app">
    <Navbar :menu="arrayMenu" :nameMenu="nameMenu" />
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
          name: "Cards",
          route: "card"
        },
        {
          name: "Forms",
          route: "forms"
        }
      ],
      nameMenu: "AppVue"
    };
  }
};
</script>
