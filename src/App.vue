<template>
  <div class="container">
    <select-question
      v-for="question in questions"
      :key="question.key"
      :question="question" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';

import { Question } from '@/types';
import SelectQuestionComponent from '@/components/questions/SelectQuestionComponent.vue';

@Component({
  components: {
    'select-question': SelectQuestionComponent,
  },
})
export default class App extends Vue {
  @State('questions') private questions!: Question[];
}
</script>

<style lang="stylus" scoped>
.container
  max-width 1200px
  margin 0 auto
  padding 3rem
  display flex
  flex-direction row
  justify-content space-around
  border 1px solid #aaa
  border-radius 1.1rem
  background-color white
  box-shadow 3px 3px #aaa
</style>
