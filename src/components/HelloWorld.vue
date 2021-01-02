<template>
  <div class="hello">
    <h1>Hi, {{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Me } from '../API_bindings'

@Component
export default class HelloWorld extends Vue {
  @Prop() private name!: string;

  constructor (...a: any[]) {
    super(...a)

    fetch('/api/me').then(x => x.json()).then((me: Me) => {
      this.name = me.name
    })
  }
}
</script>
