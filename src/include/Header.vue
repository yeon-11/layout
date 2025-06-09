<template>
  <v-app-bar app>
    <v-toolbar-title>Vuetify reference</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="'/home'">Home</v-btn>

    <!-- 🔽 NAV + Bottom Navi 드롭다운 -->
    <v-menu>
      <template #activator="{ props }">
        <v-btn text v-bind="props">
          Nav
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.to" :to="item.to">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
        <v-list-item :to="'/bottom1'">
          <v-list-item-title>Bottom Nav</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- 🔽 Button + Floating Btn 드롭다운 -->
    <v-menu>
      <template #activator="{ props }">
        <v-btn text v-bind="props">
          Button
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item :to="'/button'">
          <v-list-item-title>Button</v-list-item-title>
        </v-list-item>
        <v-list-item :to="'/fbutton'">
          <v-list-item-title>Floating Btn</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn text :to="'/dir'">Directive</v-btn>
    <v-btn text :to="'/events'">Event</v-btn>
    <v-btn text :to="'/page'">Pagination</v-btn>
    <v-btn text :to="'/tabs'">Tap</v-btn>
    <v-btn text :to="'/tooltip'">Tooltips</v-btn>
    <v-btn text :to="'/footers'">Footer</v-btn>
    <v-btn text :to="'/bread'">Bread</v-btn>
    <v-btn text :to="'/hello'">Hello</v-btn>
  </v-app-bar>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
const menuItems = [
  { text: "NAV1", to: "/nav1" },
  { text: "NAV2", to: "/nav2" },
  { text: "NAV3", to: "/nav3" },
  { text: "NAV4", to: "/nav4" },
  { text: "NAV5", to: "/nav5" },
];
</script>
