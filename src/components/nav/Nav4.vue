<template>
  <v-card class="mx-auto" max-width="430">
    <v-layout>
      <v-app-bar color="secondary" density="prominent">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>PENGUIN</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon>
            <v-icon>mdi-penguin</v-icon>
          </v-btn>
        </template>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-card
            class="mb-2"
            density="compact"
            prepend-avatar="http://randomuser.me/api/portraits/women/10.jpg"
            title="YEON"
            subtitle="학원 끝날시간 2시간 남았잖앙. 완전 럭키비키잔앙"
            variant="text"
            border
          >
            <v-img
              height="128"
              src="http://picsum.photos/512/128?imgage=660"
              cover
            ></v-img>
            <v-card-text>집에보내줭😭</v-card-text>

            <template v-slot:actions>
              <v-btn color="warning" variant="text">like</v-btn>
              <v-btn color="primary" variant="text">view more</v-btn>
            </template>
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
