<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <h1>Directive: 지시어</h1>
        <pre>
◾ v-bind: 태그의 속성을 vue인스턴스 내부의 데이터 변수에 연결
◾ v-if: 조건부 렌더링 <mark>v-if, v-else-if, v-else</mark>
◾ v-show: 결과가 참이면 보이고 거짓이면 안보임
◾ v-for: 정해진 크기만큼 반복
◾ Events:
◾ v-on:
</pre>
      </v-col>

      <v-col cols="12" md="6">
        <h3>v-bind</h3>
        <div class="" id="msg">
          {{ message }}
        </div>

        <section v-bind:class="vueClass">이 요소는 분홍색 배경이다</section>
        <p v-bind:style="{ fontSize: size }">글자를 키워볼까</p>
        <div
          v-bind:style="{
            backgroundColor: isImportant ? 'lightcoral' : 'lightgray',
          }"
        >
          조건부 배경색 칠하기
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <h3>v-if, v-else-if, v-else</h3>
        <div class="" v-if="text.includes('pizza')">
          <p>텍스트에 피자 단어가 포함 되어 있음</p>
          <img src="../../assets/img_pizza.svg" class="mrPizza" />
        </div>

        <div class="" v-else-if="text.includes('burrito')">
          <p>텍스트에 부리또 단어가 포함 되어 있음</p>
        </div>

        <div class="wrap" v-else>
          <p>텍스트에 피자 / 부리또 단어가 포함 되어 있지 않음</p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <h3>v-for</h3>
        <ol>
          <li v-for="x in manyFoods">
            {{ x }}
          </li>
        </ol>
      </v-col>

      <v-col cols="12" md="6">
        <div class="border w-100 wrap">
          <figure v-for="x in manyFood">
            <img v-bind:src="x.url" />
            <figcaption>{{ x.name }}</figcaption>
          </figure>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h1>Basic css Transition</h1>
        <v-btn @click="this.doesRotate = true">Rotate</v-btn>
        <div :class="{ rotate: doesRotate }" id="rect"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// html vue: const app = Vue.createApp
export default {
  data() {
    return {
      message: "Hello world",
      vueClass: "pinkBG",
      size: "48px",
      isImportant: true,
      text: "I like burrito, pizza, ...",
      manyFoods: ["Burrito", "Salad", "Cake", "Soup", "Fish", "Pizza", "Rice"],
      manyFood: [
        { name: "Burrito", url: "src/assets/img_burrito.svg" },
        { name: "Salad", url: "src/assets/img_salad.svg" },
        { name: "Cake", url: "src/assets/img_cake.svg" },
        { name: "Soup", url: "src/assets/img_soup.svg" },
        { name: "Fish", url: "src/assets/img_fish.svg" },
        { name: "Pizza", url: "src/assets/img_pizza.svg" },
        { name: "Rice", url: "src/assets/img_rice.svg" },
      ],

      doesRotate: false,
    };
  },
};
</script>

<style>
#msg {
  padding: 10px;
  font-size: x-large;
  background-color: lightgreen;
}
.pinkBG {
  background-color: lightpink;
}
.mrPizza {
  width: 50%;
}

figure {
  width: 80px;
  padding: 10px;
  margin: 10px;
  background: lightgrey;
  border-radius: 5px;
}

figcaption {
  text-align: center;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.rotate {
  rotate: 180deg;
  transition: all 1s ease-in-out;
}
#rect {
  border: 2px solid;
  background: lightskyblue;
  width: 60px;
  height: 60px;
}
</style>