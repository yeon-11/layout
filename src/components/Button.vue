<template>
  <v-layout ref="app" class="rounded rounded-md border">
    <v-app-bar color="surface-variant" name="app-bar">
      <child v-slot="{ print }">
        <v-btn class="mx-auto" @click="print('app-bar')"> Get data </v-btn>
      </child>
    </v-app-bar>

    <v-navigation-drawer color="surface-light" name="drawer" permanent>
      <div class="d-flex justify-center align-center h-100">
        <child v-slot="{ print }">
          <v-btn variant="text" @click="print('drawer')"> Get data </v-btn>
        </child>
      </div>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-sheet
          border="dashed md"
          color="suface-light"
          rounded="lg"
          width="100%"
        >
          <!-------------------------------------------------기본 button-->
          <h3 class="my-5 text-secondary">Buttons</h3>
          <p>
            <v-btn>기본형</v-btn
            ><v-btn prepend-icon="mdi-penguin" class="mx-3">btn</v-btn>
            <v-btn prepend-icon="mdi-penguin" append-icon="mdi-penguin"
              >btn</v-btn
            >
            <v-btn prepend-icon="mdi-penguin" stacked class="mx-3">btn</v-btn>
          </p>
          <!--기본 button 끝-->

          <!-------------------------------------------------크기별 button-->
          <v-row align="center" justify="center">
            <v-col cols="auto" class="mt100">
              <v-btn size="x-small">x-small</v-btn>
            </v-col>

            <v-col cols="auto" class="mt100">
              <v-btn size="small">small</v-btn>
            </v-col>

            <v-col cols="auto" class="mt100">
              <v-btn size="auto">auto</v-btn>
            </v-col>

            <v-col cols="auto" class="mt100">
              <v-btn size="large">large</v-btn>
            </v-col>

            <v-col cols="auto" class="mt100">
              <v-btn size="x-large">x-large</v-btn>
            </v-col>
          </v-row>
          <!--크기별 button 끝-->

          <!-------------------------------------------------block button-->
          <v-row align="center" justify="center">
            <v-col>
              <v-btn block>block button</v-btn>
            </v-col>
          </v-row>
          <!--block button 끝-->

          <!-------------------------------------------------rounded button-->
          <v-row align="center" justify="center">
            <v-col>
              <h3>Rounded button</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4" sm="6">
              <v-btn rounded="0" size="x-large" block>rounded 0</v-btn>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-btn rounded="sm" size="x-large" block>rounded sm</v-btn>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-btn rounded="lg" size="x-large" block>rounded lg</v-btn>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <v-btn rounded="xl" size="x-large" block>rounded xl</v-btn>
            </v-col>
          </v-row>
          <!--rounded button 끝-->

          <!-------------------------------------------------icon button-->
          <v-row align="center" justify="center">
            <v-col cols="auto">
              <v-btn density="compact" icon="mdi-plus"></v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn density="comfortale" icon="mdi-bee"></v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn density="default" icon="mdi-open-in-new"></v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn icon="mdi-account" size="x-small"></v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn icon="mdi-penguin"></v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn icon="mdi-open-in-new" size="large"></v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn icon="mdi-calendar" size="x-large"></v-btn>
            </v-col>
          </v-row>
          <!--icon button 끝-->

          <!-------------------------------------------------카드형+엑박 button-->
          <v-row>
            <v-col cols="12" md="4" sm="6">
              <v-card
                class="px-2 mx-auto"
                max-width="900"
                rounded="lg"
                text="penguin"
                theme="dark"
                title="LIKE"
                tariant="flat"
              >
                <template v-slot:append>
                  <div class="me-n2">
                    <v-btn density="comfortable" icon="$close" variant="plain">
                    </v-btn>
                  </div>
                </template>
                <!-------------------------------------------------button 갯수만큼 늘리기-->
                <v-item-group
                  v-model="model"
                  class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
                >
                  <v-item v-for="n in 5" :key="n">
                    <template v-slot:default="{ toggle }">
                      <v-btn
                        :active="model != null && model + 1 >= n"
                        :icon="`mdi-numeric-${n}`"
                        height="40"
                        variant="text"
                        width="40"
                        border
                        @click="toggle"
                      >
                      </v-btn>
                    </template>
                  </v-item>
                </v-item-group>
                <!--button 갯수만큼 늘리기 끝-->
              </v-card>
            </v-col>
          </v-row>
          <!--카드형+엑박 button 끝-->

          <!-------------------------------------------------팝업창 button-->
          <v-row align="center" justify="center">
            <v-col cols="12" md="4" sm="6">
              <div class="d-flex align-center justift-center">
                <v-btn
                  color="deep-purple-darken-2"
                  size="x-large"
                  @click="dialog = !dialog"
                >
                  팝업창
                </v-btn>
              </div>

              <!-------------------------------------------------팝업창 추가-->
              <v-fade-transition hide-on-leave>
                <v-card
                  v-if="dialog"
                  append-icon="$close"
                  class="mx-auto"
                  elevation="16"
                  max-width="500"
                  title="send a receipt"
                >
                  <template v-slot:append>
                    <v-btn
                      icon="$close"
                      variant="text"
                      @click="dialog = false"
                    ></v-btn>
                  </template>

                  <v-divider></v-divider>

                  <div class="py-12 text-center">
                    <v-icon
                      class="mb-6"
                      color="success"
                      icon="mdi-check-circle-outline"
                      size="128"
                    ></v-icon>
                    <div class="text-h4 font-weight-bold">
                      This receipt was sent
                    </div>
                  </div>

                  <v-divider></v-divider>

                  <div class="pa-4 text-end">
                    <v-btn
                      class="text-none"
                      color="medium-emphasis"
                      min-width="92"
                      variant="outlined"
                      rounded
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                  </div>
                </v-card>
              </v-fade-transition>
            </v-col>
          </v-row><!--팝업창 button 끝-->
        </v-sheet>
      </v-container>
    </v-main>

    <v-footer color="surface-light" name="footer" app>
      <v-btn
        class="mx-auto"
        text="Get data"
        variant="text"
        @click="print('footer')"
      >
      </v-btn>
    </v-footer>
  </v-layout>
</template>

<script setup>
//vue3에서 컴포지션 API를 간결하게 사용할수 있도록 해주는 SFC문법
import { useLayout } from "vuetify";

const Child = {
  setup(props, ctx) {
    //setup함수의 매개변수
    const { getLayoutItem } = useLayout();

    function print(key) {
      //키 값을 받아서 아이템의 정보를 json으로 경고창 출력
      alert(JSON.stringify(getLayoutItem(key), null, 2));
    }

    return () => ctx.slots.default({ print });
  },
};

import { ref } from "vue";

const dialog = ref(true);
</script>

<style>
.mt100 {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>