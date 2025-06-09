<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <h3>event</h3>

        <p>{{ "count" + count }}</p>
        <button v-on:click="count++">Count 증가</button>
        <v-btn v-on:click="count++" variant="primary">Count 증가</v-btn><br/>
      </v-col>

      <v-col cols="12" md="4">
            <div id="lightDiv">
                <div v-show="lightOn"></div>
                <img src="../../assets/img_lightBulb.svg"/>
            </div>
            <v-btn v-on:click="lightOn = !lightOn">Switch Light</v-btn>
        </v-col>
    </v-row>
    
  </v-container>

<br/>
<hr>
 <pre>
 <b>Event</b>
 ◾ 지시문을 통해 이루어짐, <mark>v-on</mark> 사용
 </pre>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      lightOn:false,
    };
  },
};
</script>

<style>
#lightDiv{
    position: relative;
    width: 150px;
    height: 150px;

}

#lightDiv > img{
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
</style>