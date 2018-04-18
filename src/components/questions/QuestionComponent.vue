<template>
  <div
    class="question-container"
    @mouseover="onHover"
    @mouseout="onLeave">
    <label class="question-label">{{ question.text }}</label>

    <div class="question-input">
      <slot />
    </div>

    <div class="question-help-text">
      <p v-show="helpTextVisible">{{ question.helpText }}</p>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import { Question } from '@/types';
import { ActionMethod } from 'vuex';

@Component
export default class QuestionComponent extends Vue {
  @Prop({ required: true })
  public question!: Question;

  public value: string | null = null;
  public helpTextVisible = false;

  private onHover() {
    this.helpTextVisible = true;
  }

  private onLeave() {
    this.helpTextVisible = false;
  }
}
</script>
