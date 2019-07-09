<template>
  <EmptyPromiseSource :step="step" />
</template>

<script>
import EmptyPromiseSource from './EmptyPromiseSource';
export default {
  data() {
    return {
      step: 0,
    };
  },
  components: { EmptyPromiseSource },
  mounted() {
    document.addEventListener('keydown', this.keydown.bind(this));
  },
  methods: {
    keydown(evt) {
      if (evt.code === 'ArrowLeft') this.step--;
      if (evt.code === 'ArrowRight') this.step++;
    },
  },
};
</script>

<style>
.highlight {
  width: fit-content;
  margin: 100px auto;
}
</style>