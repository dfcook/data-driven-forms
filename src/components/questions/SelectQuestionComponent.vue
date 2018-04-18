<template>
  <div>
    <label>{{ question.text }}</label>
    <select
      :name="question.key"
      v-model="value">
      <option
        v-for="option in question.options"
        :key="option.key"
        :value="option.key">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import { SelectQuestion } from '@/types';
import { ActionMethod } from 'vuex';

@Component
export default class SelectQuestionComponent extends Vue {
  @Prop({ required: true })
  public question!: SelectQuestion;

  public value: string | null = null;

  @Action
  private updateAnswer!: ActionMethod;

  @Watch('value')
  private onValueChanged(val: string, oldVal: string) {
    this.updateAnswer({ key: this.question.key, value: val });
  }
}
</script>

