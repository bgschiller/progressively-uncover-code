<template>
  <div>
    <h1>Progressively Uncover Code</h1>
    <p>
      Use left and right arrow keys to step through the stages
    </p>
    <p>
      More info at <a href="https://github.com/bgschiller/progressively-uncover-code">github.com/bgschiller/progressively-uncover-code</a>
    </p>
    <EmptyPromiseSource :step="step" />

  </div>
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
      if (this.step >= 4) {
        this.step = 0;
      }
      if (this.step < 0) {
        this.step = 3;
      }
    },
  },
};
</script>

<style>
h1, p {
  text-align: center;
}
.highlight {
  width: fit-content;
  margin: 100px auto;
}
</style>