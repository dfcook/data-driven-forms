<template>
  <div
    class="question-container"
    @mouseover="onHover"
    @mouseout="onLeave">
    <label class="question-label">{{ question.text }}</label>

    <div class="question-input">
      <slot />
    </div>

    <help-text
      :text="question.helpText"
      :visible="helpTextVisible" />

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { Question } from '@/types';
import QuestionHelpTextComponent from './QuestionHelpTextComponent.vue';

@Component({
  components: {
    'help-text': QuestionHelpTextComponent,
  },
})
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
