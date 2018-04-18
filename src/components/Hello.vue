<template>
  <div>Hello {{ name }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  @Prop({ required: true })
  public name!: string;
}
</script>