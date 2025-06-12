<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <h3>methods</h3>
        <p>Click on the box below</p>
        <div class="app">
          <div v-on:click="changeText">
            {{ text }}
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <h3>event</h3>
        <div class="mouse">
          <div v-on:mousemove="mousePos">
            <span> xPos: {{ xPos }} </span><br />
            <span> yPos: {{ yPos }} </span>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <h3>write</h3>
        <div class="rot">
          <textarea
            v-on:input="writeText"
            rows="8"
            cols="30"
            placeholder="글을 입력하세용"
          ></textarea>
          <div>
            <span>{{ txt }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <hr />
    <pre>
<b>Methods</b>
◾ 메서드 속성 아래 vue인스턴스에 속하는 함수
◾ 이벤트 처리와 함께 사용하면 더 복잡한 작업을 수행하는데 유용
◾ 이벤트 처리 외에도 다른 작업을 수행하는데 사용
</pre>
  </v-container>
</template>

<script>
// const app 👉 Vue.createApp cdn 걸었을때
export default {
  data() {
    return {
      text: "",
      xPos: 0,
      yPos: 0,
      txt: "",
    };
  },
  methods: {
    changeText() { //methods
      this.text = "Hello world";
    },

    mousePos(event) { //event
      this.xPos = event.offsetX;
      this.yPos = event.offsetY;
    },

    writeText(event) { //write
      this.txt = event.target.value;
    },
  },
};
</script>

<style>
 {/* --------------------------------------- methods style */}
.app {
  border: black solid 1px;
  width: 200px;
  padding: 20px;
  margin-bottom: 10px;
}

.app > div {
  width: 140px;
  height: 60px;
  background-color: tomato;
  padding: 20px;
  text-align: center;
}

 {/* --------------------------------------- event style */}
.mouse {
  border: 1px inset;
  width: 100%;
  padding: 20px;
}

.mouse div {
  width: 90%;
  height: 80px;
  background-color: whitesmoke;
  padding: 20px;
}

.mouse div span {
  font-weight: bold;
}

{/* --------------------------------------- write style */}
.rot{
    border: 1px solid black;
    width: 300px;
    padding: 20px;
    margin-bottom: 10px;
}

.rot > div {
    width: 100%;
    position: relative;
    margin-top: 10px;
    aspect-ratio: 1;
    background-image: url(../../assets/note.png);
    background-size: 100%;
}

.rot span {
    width: 80%;
    font-weight: bold;
    line-height: 1.2em;
    transform-origin: 0 0;
    rotate: 33deg;
    position: absolute;
    top: 40px;
    left: 70px;
    font-family: 'Courier New', Courier, monospace;
}

.rot textarea{
    width: 100%;
    box-sizing: border-box;
}
</style>