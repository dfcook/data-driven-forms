<template>
  <div class="question-help-text">
    <p
      v-show="visible"
      class="help-text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class QuestionComponent extends Vue {
  @Prop({ required: true })
  private visible!: boolean;

  @Prop()
  private text!: string;
}
</script>

<style lang="stylus" scoped>
.question-help-text
  flex 30%

.help-text
  margin-left 1rem
  background-color #5dade2
  padding 0.3rem
  color white
  border-radius 0.2rem
  text-align center
</style>
