<template>
  <v-app-bar app>
    <v-toolbar-title>Vuetify reference</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="'/home'">Home</v-btn>

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" text>
          vue html
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="navigate(item.link)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" text>
          nav
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(nav, index) in navItems"
          :key="index"
          @click="navigate(nav.link)"
        >
          <v-list-item-title>{{ nav.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" text>
          Vuetify3
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(vuetify, index) in vuetifyItems"
          :key="index"
          @click="navigate(vuetify.link)"
        >
          <v-list-item-title>{{ vuetify.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" text>
          V-Form Inputs & Controls
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(form, index) in formItems"
          :key="index"
          @click="navigate(form.link)"
        >
          <v-list-item-title>{{ form.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" text>
          V-selection
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(select, index) in selectItems"
          :key="index"
          @click="navigate(select.link)"
        >
          <v-list-item-title>{{ select.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" text>
          V-feedback
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(feedback, index) in feedbackItems"
          :key="index"
          @click="navigate(feedback.link)"
        >
          <v-list-item-title>{{ feedback.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template #activator="{ props }">
        <v-btn v-bind="props" text>
          V-img, icon
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(img, index) in imgItems"
          :key="index"
          @click="navigate(img.link)"
        >
          <v-list-item-title>{{ img.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  { title: "Directory", link: "/dir" },
  { title: "Events", link: "/events" },
  { title: "Functions", link: "/fs" },
  { title: "Computed", link: "/computed" },
  { title: "V-model", link: "/vmodel" },
  { title: "Watchers", link: "/watchers" },
]);

const navItems = ref([
  { title: "Nav1", link: "/nav1" },
  { title: "Nav2", link: "/nav2" },
  { title: "Nav3", link: "/nav3" },
  { title: "Nav4", link: "/nav4" },
  { title: "Nav5", link: "/nav5" },
  { title: "Bottom Nav", link: "/bottom1" },
]);

const vuetifyItems = ref([
  { title: "Tabs", link: "/tabs" },
  { title: "Button", link: "/button" },
  { title: "Floating button", link: "/fbutton" },
  { title: "ToolTip", link: "/tooltip" },
  { title: "Page", link: "/page" },
  { title: "Footers", link: "/footer" },
]);

const formItems = ref([
  { title: "Autocomplete", link: "/auto" },
  { title: "Checkbox", link: "/check" },
  { title: "Combobox", link: "/combo" },
  { title: "File input", link: "/file" },
  { title: "Form", link: "/form" },
  { title: "Custom inputs", link: "/custom" },
  { title: "Number input", link: "/nums" },
  { title: "OTP input", link: "/otp" },
  { title: "Radio buttons", link: "/radio" },
  { title: "Range slider", link: "/range" },
  { title: "Switch", link: "/sw" },
  { title: "Text field", link: "/textf" },
  { title: "Textarea", link: "/texta" },
]);

const selectItems = ref([
  { title: "Button toggle", link: "/btoggle" },
  { title: "Carousel slide", link: "/cslide" },
  { title: "Chips", link: "/chip" },
  { title: "Input group", link: "/igroup" },
  { title: "Slide group", link: "/slideg" },
  { title: "Stepper", link: "/step" },
  { title: "Windows", link: "/windows" },
]);

const feedbackItems = ref([
  { title: "Alerts", link: "/alerts" },
  { title: "Badges", link: "/badges" },
  { title: "Banner", link: "/banner" },
  { title: "Empty state", link: "/empty" },
  { title: "Hover effects", link: "/hover" },
  { title: "Progress circular", link: "/pcircular" },
  { title: "Progress linear", link: "/plinear" },
  { title: "Ratings", link: "/ratings" },
  { title: "Skeleton loaders", link: "/skloaders" },
  { title: "Snackbars", link: "/sbars" },
  { title: "Snackbar queue", link: "/queue" },
  { title: "Timelines", link: "/time" },
]);

const imgItems = ref([
  { title: "Image ratio", link: "/ratio" },
  { title: "Avatar", link: "/ava" },
  { title: "Icons", link: "/icons" },
  { title: "Images", link: "/imgs" },
  { title: "Parallax", link: "/parallax" },
]);

/*
       
*/
//add
import { useRouter } from "vue-router";

const router = useRouter();

function navigate(link) {
  router.push(link);
}
</script>