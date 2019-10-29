<template>
  <div id="app">
    <!-- NAVBAR -->
    <b-navbar toggleable="md" type="dark" variant="info">
      <!-- TITLE NAVBAR -->
      <b-navbar-brand :to="{ name: 'home' }" class="">NavBar</b-navbar-brand>
      <!-- TOGGLE -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- ITEMS NAVBAR -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
          <b-nav-item :to="{ name: 'grid' }">Grid</b-nav-item>
          <b-nav-item :to="{ name: 'card' }">Card</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- ROUTER VIEW -->
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
