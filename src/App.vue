<template>
  <div class="container center-content">
    <div class="full-width center-content">
      <select-question
        v-for="question in questions"
        :key="question.key"
        :question="question" />
    </div>
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
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px
</style>
