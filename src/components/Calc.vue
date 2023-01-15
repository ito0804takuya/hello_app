<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <div>
      <div>
        <!-- colsは横幅 -->
        <textarea v-model="fomula" cols="40" rows="5"></textarea>
      </div>
      <div>
        <button v-on:click="doAction">CALC</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCalc",
  // 親であるAppコンポーネントからtitleを受け取る（v-bindで）
  props: {
    title: String,
  },
  data: function() {
    return {
      message: "Enter",
      fomula: '0',
    };
  },
  methods: {
    doAction: function() {
      // textareaからの入力を受け取り
      const arr = this.fomula.trim().split('\n');
      
      // 最後は（変数定義でなく）式のはずなので、これだけは別で保存しておく
      const last = arr.pop();

      let fn = ""; // fn: function
      for (const n in arr) {
        if (arr[n].trim() != "") {
          // 最後の式（last）以外は、変数定義のはず
          fn += "var " + arr[n] + ";";
        }
      }
      fn += "return " + last + ";";
      // 作った関数を実行
      const exp = "function f() {" + fn + "} f();";
      const answer = eval(exp); // eval: 文字列をコードとして解消を実行

      this.message = "answer: " + answer;
      let re = arr.join(";").trim();
      re += last;
      this.$emit("result-event", re, answer);
    }
  }
}
</script>
