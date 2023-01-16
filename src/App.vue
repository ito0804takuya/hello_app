<template>
  <div id="app">
    <!-- コンポーネントを使う -->
    <!-- コンポーネントのtitleに、このコンポーネントのmessageの値をbindする -->
    <HelloWorld v-bind:title="message" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  // App.vueを使う側で、どういう名前で使うか
  name: 'App',
  components: {
    HelloWorld
  },
  // 変数を用意
  data: function() {
    return {
      message: "validate",
    };
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
