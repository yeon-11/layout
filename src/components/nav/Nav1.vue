<template>
  <v-layout class="rounded rounded-md border">
    <v-navigation-drawer>
      <v-list nav>
        <v-list-item title="Navigation drawer" link> </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar title="Applicaton bar"></v-app-bar>
    <v-main class="d-flex align-center justify-center" height="">
      <v-container>
        <v-sheet
          border="dashed md"
          color="suface-light"
          height=""
          rounded="lg"
          width="100%"
        >
          <h3>App bar</h3>
<pre>
네비게이션은 모든 사이트에 존재
</pre>
          <!-------------------------------------------------기본 nav-->
          <v-app-bar :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon>
                </v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>기본형</v-app-bar-title>
          </v-app-bar> <!--기본 nav 끝-->
          
          <!-------------------------------------------------Collapse nav-->
          <v-app-bar collapse :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon>
                </v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Collapse</v-app-bar-title>
          </v-app-bar> <!--Collapse nav 끝-->

          <!-------------------------------------------------Rounded nav-->
          <v-app-bar rounded :elevation="2">
            <template v-slot:prepend>
                <v-app-bar-nav-icon>
                </v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Rounded</v-app-bar-title>
          </v-app-bar> <!--Rounded nav 끝-->
          
        </v-sheet>
      </v-container>
    </v-main>
  </v-layout>
</template>