<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <h3>event</h3>

        <p>{{ "count" + count }}</p>
        <button v-on:click="count++">Count 증가</button>
        <v-btn v-on:click="count++" variant="primary">Count 증가</v-btn>
      </v-col>

      <v-col cols="12" md="4">
        <h3>light</h3>
        <div id="lightDiv">
          <div v-show="lightOn"></div>
          <img src="../../assets/img_lightBulb.svg" />
        </div>
        <v-btn v-on:click="lightOn = !lightOn">Switch 💡</v-btn>
      </v-col>

      <v-col cols="12" md="4">
        <h3>count input event</h3>
        <input
          type="text"
          v-on:input="inputCount++"
          placeholder="Start writing"
        />
        <p>{{ " Input events occured: " + inputCount }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <h3>mouse move</h3>
        <div class="color"
          v-on:mousemove="colorVal = Math.floor(Math.random() * 360)"
          v-bind:style="{ backgroundColor: 'hsl(' + colorVal + ', 60%, 60%)' }"
        ></div>
        <p>background-color : hsl (<strong>{{ colorVal }}</strong>)</p>
      </v-col>

      <v-col cols="12" md="4">
        <h3></h3>
      </v-col>

      <v-col cols="12" md="4">
        <h3></h3>
      </v-col>
    </v-row>
  </v-container>

  <br />
  <hr />
  <pre>
 <b>Event</b>
 ◾ 지시문을 통해 이루어짐, <mark>v-on</mark> 사용
 </pre
  >
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      lightOn: false,
      inputCount: 0,
      colorVal:50,
    };
  },
};
</script>

<style>
#lightDiv {
  position: relative;
  width: 150px;
  height: 150px;
}

#lightDiv > img {
  position: relative;
  width: 100%;
  height: 100%;
}

#lightDiv > div {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: yellow;
}

.color{
    width: 200px;
    height: 80px;
}
</style>