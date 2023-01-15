<template>
  <div id="app">
    <!-- コンポーネントを使う -->
    <!-- HelloWorldコンポーネントのtitleに、このコンポーネントのmessageの値をbindする -->
    <!-- result-eventというイベントが呼ばれるとappActionを発動 -->
    <HelloWorld v-bind:title="message" v-on:result-event="appAction" />
    <!-- <button v-on:click="doAction">change title</button> -->
    <p>{{ result }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  // App.vueを使う側で、どういう名前で使うか
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      message: "Helloヘロー",
      result: "no event",
    };
  },
  methods: {
    // doAction: function() {
    //   const input = prompt("new title:");
    //   this.message = input;
    // },
    appAction: function(message) {
      this.result = '*** you send"' + message + '" ***';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
