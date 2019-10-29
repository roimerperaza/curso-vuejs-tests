<template>
  <div>
    <!-- NAVBAR -->
    <b-navbar toggleable="md" type="dark" variant="info">
      <!-- TITLE NAVBAR -->
      <b-navbar-brand :to="{ name: 'home' }" class>NavBar</b-navbar-brand>
      <!-- TOGGLE -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- ITEMS NAVBAR -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="(item, index) of menu" :key="index">
          <b-nav-item :to="item.route">{{ item.name }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    menu: Array
  }
};
</script>
