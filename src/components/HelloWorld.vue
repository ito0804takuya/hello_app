<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <pre v-on:click="clear">{{ message }}</pre>
    <hr>

    <!-- 一番上に重なっているCのタグをclickすると、その下のB, Aのonclickも発動する -->
    <div id="out" class="out" v-on:click="a_event">A
      <div id="mid" class="mid" v-on:click.self="b_event">B
        <div id="in" class="in" v-on:click="c_event">C
        </div>
      </div>
    </div>

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
  methods: {
    a_event: function(event) {
      this.message += "Aイベント [" + event.target.id + ' -> ' + event.currentTarget.id + "]\n";
    },
    b_event: function(event) {
      this.message += "Bイベント [" + event.target.id + ' -> ' + event.currentTarget.id + "]\n";
    },
    c_event: function(event) {
      this.message += "Cイベント [" + event.target.id + ' -> ' + event.currentTarget.id + "]\n";
    },
    clear: function() {
      this.message = "";
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
