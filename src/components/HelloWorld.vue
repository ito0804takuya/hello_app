<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <div>value: <input type="number" v-model="val"></div>
    <div style="height:10px;"></div>
    <table>
      <tr><th>足す: </th><td>{{ add }}</td></tr>
      <tr><th>引く: </th><td>{{ sub }}</td></tr>
      <tr><th>かける: </th><td>{{ mult }}</td></tr>
      <tr><th>割る: </th><td>{{ div }}</td></tr>
    </table>
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
      message: "監視",
      val: 0,
      add: 0,
      sub: 0,
      mult: 0,
      div: 0,
    };
  },
  watch: {
    val: function(value) {
      this.val = value;
      const parsedVal = parseInt(value);
      this.add = Math.floor(parsedVal + 2);
      this.sub = Math.floor(parsedVal - 2);
      this.mult = Math.floor(parsedVal * 2);
      this.div = Math.floor(parsedVal / 2);
    }
  },
  created: function() {
    this.val = 5;
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
