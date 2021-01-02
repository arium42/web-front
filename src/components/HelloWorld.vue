<template>
  <div class="hello">
    <h1>Hello, {{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { Me } from '../API_bindings';

export default {
  name: '-- please wait --',

  data() {
    console.log("11");

    return {
      name: this.name,
    };
  },

  mounted() {
    console.log("12");

    fetch('/api/me').then((x) => x.json()).then((me: Me) => {
      this.name = me.name;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1
  margin-left 40px
</style>
