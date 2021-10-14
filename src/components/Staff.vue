<template>
  <div class="tr">
    <div class="td">
      {{ name }}
    </div>
    <div class="td">
      <span>{{ status }}</span>
    </div>
    <div class="td">
      <span v-for="(item, index) in processed" :key="index"> {{ item }}, </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Staff",
  props: {
    name: String,
    curNumber: Number,
  },
  data() {
    return {
      processed: [],
      num: 0,
    };
  },
  computed: {
    status() {
      return this.num ? this.curNumber : "idle";
    },
  },
  methods: {
    updateStatus() {
      this.$emit("update", this.status);
    },
  },
  mounted() {
    this.updateStatus();
  },
  watch: {
    status(val) {
      setTimeout(() => {
        this.processed.push(val);
        this.num = 0;
      }, 0.5 + Math.random());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tr:nth-child(even) .td {
  background: #f0f0f0;
}
</style>
