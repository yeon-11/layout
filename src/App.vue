<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Vuetify Reference</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="'/Home'" router>Home</v-btn>
      <v-btn text :to="'/nav1'" router>nav1</v-btn>
      <v-btn text :to="'/nav2'" router>nav2</v-btn>
      <v-btn text :to="'/nav3'" router>nav3</v-btn>
      <v-btn text :to="'/nav4'" router>nav4</v-btn>
      <v-btn text :to="'/nav5'" router>nav5</v-btn>
      <v-btn text :to="'/button'" router>button</v-btn>
      <v-btn text :to="'/expan'" router>expan</v-btn>
      <v-btn text :to="'/hello'" router>hello</v-btn>
      <v-btn text :to="'/tooltip'" router>tootip</v-btn>
      <v-btn text :to="'/breadcrumb'" router>breadcrumb</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>