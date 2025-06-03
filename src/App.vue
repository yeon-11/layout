<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Vuetify Reference</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="'/Home'" router>Home</v-btn>
      <v-btn text :to="'/nav1'" router>Nav1</v-btn>
      <v-btn text :to="'/nav2'" router>Nav2</v-btn>
      <v-btn text :to="'/nav3'" router>Nav3</v-btn>
      <v-btn text :to="'/nav4'" router>Nav4</v-btn>
      <v-btn text :to="'/nav5'" router>Nav5</v-btn>
      <v-btn text :to="'/bottom1'" router>Bottom nav</v-btn>
      <v-btn text :to="'/button'" router>Button</v-btn>
      <v-btn text :to="'/expan'" router>Expan</v-btn>
      <v-btn text :to="'/hello'" router>Hello</v-btn>
      <v-btn text :to="'/tooltip'" router>Tootip</v-btn>
      <v-btn text :to="'/bread'" router>Breadcrumb</v-btn>
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