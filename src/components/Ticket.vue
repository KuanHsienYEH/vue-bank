<template>
  <div class="ticket">
    <h1>waiting : {{ countLength }}</h1>
    <button @click="increment">
      <h1>Next {{ countStart + 1 }}</h1>
    </button>
  </div>
</template>

<script>
export default {
  name: "Ticket",
  props: {
    countStart: Number,
    countLength: Number,
  },
  computed: {},
  methods: {
    increment() {
      this.$emit("updateCount", this.countStart + 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ticket {
  display: flex;
  flex-flow: nowarp row;
  justify-content: space-evenly;
  margin-top: 20px;
}
</style>
