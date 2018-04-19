<template>
  <div class="main-container">
    <div class="title">Customer Satisfaction Survey</div>
    <div class="questions-container">
      <select-question
        :question="currentQuestion" />
    </div>
    <div class="footer">
      {{ currentIndex }} of {{ questions.length }} questions
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

  private currentIndex: number = 0;

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }
}
</script>

<style lang="stylus" scoped>
.main-container
  max-width 1000px
  margin 0 auto
  margin-top 11rem
  border 1px solid #aaa
  border-radius 0.7rem
  background-color white
  .title
    padding 1rem
    background-color #2ecc71
    border-top-left-radius 0.7rem
    border-top-right-radius 0.7rem
    color white
    font-size 1.7em
  .questions-container
    display flex
    flex-direction column
    padding 5rem
    justify-content space-around
  .footer
    padding 1rem
    background-color black
    color white
    text-align center
    border-bottom-left-radius 0.7rem
    border-bottom-right-radius 0.7rem
</style>
