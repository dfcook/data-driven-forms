<template>
  <div class="container center-content">
    <div class="full-width center-content">      
      <Hello name="Everybody" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Hello from './components/Hello.vue';

@Component({
  components: {
    Hello,
  },
})
export default class App extends Vue {
}
</script>

<style lang="stylus" scoped>
.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px
</style>
