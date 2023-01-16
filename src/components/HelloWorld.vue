<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>

    <ol>
      <slot />
    </ol>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
  },
  // 変数を用意（初期値とともに）
  data: function() {
    return {
      message: "はじめ",
    };
  },
}
</script>

<style scoped>
div {
  margin: 0px;
  padding: 0px;
  text-align: left;
}
div.out {
  background-color: aqua;
  width: 300px;
  height: 200px;
}
div.mid {
  background-color: red;
  width: 200px;
  height: 175px;
}
div.in {
  background-color: green;
  width: 100px;
  height: 150px;
}
</style>
