<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <h3>Basic</h3>
        <v-pagination :length="20"></v-pagination>
      </v-col>

      <v-col cols="12" md="4">
        <h3>Round</h3>
        <v-pagination
          v-model="page"
          :length="4"
          rounded="circle"
        ></v-pagination>
      </v-col>

      <v-system-bar> <!--모바일 상단바-->
        <v-icon icon="mdi-wifi-strength-4"></v-icon>
        <v-icon icon="mdi-signal" class="ms-2"></v-icon>
        <v-icon icon="mdi-battery" class="ms-2"></v-icon>
        <span class="ms-2">14:41</span>
      </v-system-bar>
      
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
// vue 라이브러이에서 {ref} 함수 가져옴
// 일반적인 값(숫자, 문자, 객체) 등을 반응형으로 만들어 추적

const page = ref(1);
// page 변수 선언 후 그 값은 (1)
// ref(1): (1)을 초기값으로 가지는 반응형 참조 객체를 생성
</script>