<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <h3>별점</h3>
        <v-rating
          v-model="rating"
          active-color="orange"
          color="orange-lighten-1"
        ></v-rating>
      </v-col>

      <v-col cols="12" md="4">
        <h3>0.5 별점</h3>
        <v-rating
          v-model="rat"
          color="green"
          empty-icon="mdi-circle-outline"
          full-icon="mdi-circle"
          half-increments
          hover
        ></v-rating>
      </v-col>

      <v-col cols="12" md="4">
        <h3>color</h3>
        <v-rating v-model="rating">
          <template v-slot:item="props">
            <v-icon
              :color="props.isFilled ? colors[props.index] : 'grey-lighten-1'"
              size="large"
            >
              {{ props.isFilled ? "mdi-star-circle" : "mdi-circle-outline" }}
            </v-icon>
          </template>
        </v-rating>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <h3>date picker</h3>
        <v-date-picker></v-date-picker>
      </v-col>

      <v-col cols="12" md="4">
        <h3>color picker</h3>
        <v-color-picker></v-color-picker>
      </v-col>

      <v-col cols="12" md="4">
        <h3>skeleton-loader</h3>
        <v-skeleton-loader type="card"></v-skeleton-loader>
        <h3>:elevation="24" boilerplate</h3>
        <v-skeleton-loader
          :elevation="24"
          boilerplate
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const rating = ref(3);

const rat = ref(3.5);

const colors = ["green", "purple", "orange", "indigo", "red"];
</script>