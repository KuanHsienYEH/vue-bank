<template>
  <div class="ticket">
    <h1>waiting : {{ countLength }}</h1>
    <button @click="increment">
      <h1>Next {{ ticketNumber + 1 }}</h1>
    </button>
  </div>
</template>

<script>
export default {
  name: "Ticket",
  props: {
    ticketNumber: Number,
    countLength: Number,
  },
  methods: {
    increment() {
      this.$emit("updateCount", this.ticketNumber + 1);
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
