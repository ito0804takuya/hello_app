<template>
  <div id="app">
    <!-- コンポーネントを使う -->
    <!-- コンポーネントのtitleに、このコンポーネントのmessageの値をbindする -->
    <!-- result-eventというイベントが呼ばれるとappActionを発動 -->
    <Calc v-bind:title="message" v-on:result-event="appAction" />
    <!-- logにHTMLコード（文字列）が入ってくるのでそれをHTMLとして表示 -->
    <div><table v-html="log"></table></div>
  </div>
</template>

<script>
import Calc from './components/Calc.vue';

export default {
  // App.vueを使う側で、どういう名前で使うか
  name: 'App',
  components: {
    Calc
  },
  // 変数を用意
  data: function() {
    return {
      message: "CALC",
      result: [],
    };
  },
  // 算術プロパティ
  computed: {
    // logには値をただ割り当てる訳にはいかないので、ここで色々加工する
    log: function() {
      let table = '<tr><th>Expression</th><th>Value</th></tr>';
      for (const i in this.result) {
        table += '<tr><td>' + this.result[i][0] + '</td><th>' + this.result[i][1] + '</th></tr>';
      }
      return table;
    }
  },
  // コンポーネントのオブジェクトが作成された直後に実行される
  created: function() {
    const items = localStorage.getItem("log");
    const logs = JSON.parse(items);
    if (logs != null) { this.result = logs; }
  },
  methods: {
    appAction: function(exp, res) {
      this.result.unshift([exp, res]);
      if (this.result.length > 10) {
        this.result.pop();
      }
      const log = JSON.stringify(this.result);
      console.log(log);
      localStorage.setItem("log", log);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 5px;
}
</style>
