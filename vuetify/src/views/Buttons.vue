<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn color="primary">primary</v-btn>&nbsp;&nbsp;
        <v-btn color="secondary">secondary</v-btn>&nbsp;&nbsp;
        <v-btn color="accent">accent</v-btn>&nbsp;&nbsp;
        <v-btn color="error">error</v-btn>&nbsp;&nbsp;
        <v-btn color="info">info</v-btn>&nbsp;&nbsp;
        <v-btn color="success">success</v-btn>&nbsp;&nbsp;
        <v-btn color="warning">warning</v-btn>&nbsp;&nbsp;
        <v-btn dark color="blue">Blue dark</v-btn>&nbsp;&nbsp;
        <v-btn color="secondary" text>Sin fondo</v-btn>&nbsp;&nbsp;
        <v-btn color="secondary" large>Largo</v-btn>&nbsp;&nbsp;
        <v-btn color="secondary" small>Small</v-btn>&nbsp;&nbsp;
        <v-btn color="secondary" :disabled="disabledBtn">Disabled</v-btn>&nbsp;&nbsp;
        <v-btn color="secondary" depressed>depressed</v-btn>&nbsp;&nbsp;
        <v-btn text>
          <v-icon>account_circle</v-icon>
        </v-btn>&nbsp;&nbsp;
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      disabledBtn: true
    };
  }
};
</script>