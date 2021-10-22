<template>
  <div class="tr">
    <div class="td">
      {{ staff.staffName }}
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
    staff: Object,
  },
  data() {
    return {
      processed: [],
      selfStaff: {
        staffName: this.staff.staffName,
        curNumber: 0,
        isProcessing: false,
      },
    };
  },
  computed: {
    status() {
      return this.selfStaff.curNumber === 0 ? "idle" : this.selfStaff.curNumber;
    },
  },
  methods: {
    updateStatus() {
      this.$emit("update", this.selfStaff);
      console.log(this.selfStaff); //這裡會把全部的staff都印出來
    },
  },
  watch: {
    staff: {
      immediate: true,
      deep: true,
      handler(val) {
        this.selfStaff.curNumber = val.curNumber;
        setTimeout(() => {
          if (this.selfStaff.curNumber) this.processed.push(val.curNumber);
          this.selfStaff.curNumber = 0;
          this.updateStatus();
        }, 5000 + Math.random());
      },
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
