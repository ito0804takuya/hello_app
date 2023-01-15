<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
  <div>
    <!-- dataで用意したtextInputにバインドする -->
    <input type="text" v-model="input">
    <button v-on:click="doAction">Click</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // コンポーネントを使う側で注入する値 <HelloWorld title="Hello" />
  props: {
    title: String,
  },
  // 変数を用意（初期値とともに）
  data: function() {
    return {
      message: "名前は？",
      input: "no name"
    };
  },
  methods: {
    doAction: function() {
      this.message = "こんちは" + this.input + "さん";
      // 引数にinputを渡して、result-eventという名前のイベントを呼び出す
      this.$emit('result-event', this.input);
    }
  }
}
</script>

<style scoped>
div {
  margin: 0px;
  padding: 0px;
  text-align: left;
}
</style>
