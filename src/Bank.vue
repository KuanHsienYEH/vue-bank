<template>
  <div id="app">
    <div class="table">
      <div class="thead">
        <div class="tr">
          <div class="th"><h3>counter</h3></div>
          <div class="th"><h3>processing</h3></div>
          <div class="th"><h3>processed</h3></div>
        </div>
      </div>
      <div class="tbody">
        <Staff
          v-for="(staff, index) in staffs"
          :name="staff"
          :key="index"
          :curNumber="curNumber"
          @updateStatus="updateSelfStatus"
        />
      </div>
    </div>
    <Ticket
      :countStart="countStart"
      :countLength="countLength"
      @updateCount="selfUpdateCount"
    />
  </div>
</template>

<script>
import Staff from "./components/Staff.vue";
import Ticket from "./components/Ticket.vue";

export default {
  name: "Bank",
  data() {
    return {
      staffs: ["Annie", "Jack", "Bernie", "Erica"], //行員
      countStart: 0, //號碼牌從0開始
      queue: [], //排隊中的號碼
      curNumber: 0, //下一個要被處理的號碼
    };
  },
  components: {
    Staff,
    Ticket,
  },
  computed: {
    countLength() {
      return this.queue.length;
    },
  },
  methods: {
    selfUpdateCount(val) {
      this.countStart = val;
      this.queue.push(val);
      //當queue裡面有號碼的時候 從queue拿一個號碼 去找idle的人
    },
    updateSelfStatus(val) {
      console.log(val);
    },
  },
  mounted() {
    console.log(this.$children[0].name);
  },
  watch: {
    queue(val) {
      if (this.curNumber === 0) {
        this.curNumber = this.queue.shift();
        console.log(val);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 98%;
  max-width: 1200px;
  margin: 0 auto;
}
.table {
  display: grid;
  border-collapse: collapse;
  border: 1px solid #c5c5c5;
  min-width: 100%;
  font-size: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr 1fr 1fr;
  font-size: 24px;
}
.thead,
.tbody,
.tr {
  display: contents;
}
.th {
  background-color: #e2e2e2;
}
.td {
  margin-top: 2px;
}
</style>
