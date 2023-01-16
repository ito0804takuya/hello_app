<template>
  <div id="app">
    <!-- コンポーネントを使う -->
    <!-- コンポーネントのtitleに、このコンポーネントのmessageの値をbindする -->
    <HelloWorld title="slot">
      <li v-for="obj in slotObjs" v-bind:key="obj.name">
        {{ obj.name }} ({{ obj.mail }})
      </li>
    </HelloWorld>
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
      slotObjs: [
        { name: "taro", mail: "taro@gamil.com" },
        { name: "hanako", mail: "hanako@gamil.com" },
        { name: "hide", mail: "hide@gamil.com" },
      ]
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
