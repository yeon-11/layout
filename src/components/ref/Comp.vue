<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <h3>Computed Properties</h3>
        <form>
          <p>
            체크박스 체크하기
            <label class="form-label">
              <input type="checkbox" class="form-check" v-model="chbxVal" />
              {{ isImportant }}
            </label>
          </p>
        </form>
      </v-col>

      <v-col cols="12" md="4">
        <h3>Mustache Syntax</h3>
        {{ name }}
        {{ message }}
      </v-col>

      <v-col cols="12" md="4">
        <h3>vue template</h3>
        <p>html과 같다</p>
      </v-col>
    </v-row>

    <hr />
    <pre>
<b>Computed Properties</b>
◾ 다른 속성에 따라 달라지는 점 제외, 데이터 속성과 유사
◾ Methods처럼 작성되지만 입력 인수 허용❌
◾ 종속성이 변경되면 자동 업데이트, Methods는 무언가 발생하면 호출
◾ 다른것에 의존하는 것을 출력할 때 사용
◾ 동적이다 👉 하나 이상의 데이터에 속성값에 따라 변경
◾ computed 라는 예약된 이름을 갖는다

</pre>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      chbxVal: false,

      name: "Apple",
      message: "i like",
      
      msg: "hello world",
    };
  },
  computed: {
    isImportant() {
      if (this.chbxVal) {
        return "YES ⭕";
      } else {
        return "NO ❌";
      }
    },
  },

  template: `<h3>{{ msg }}<</h3>
  <p>이것은 파라미터</p>`,
};
</script>

<style>
form {
  border: 1px solid black;
  display: inline-block;
  padding: 10px;
}

label {
  padding: 5px;
}

label:hover {
  cursor: pointer;
  background-color: lightgray;
  border-radius: 5px;
}
</style>