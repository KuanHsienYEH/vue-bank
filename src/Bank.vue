<template>
  <div id="app">
    <div class="table">
      <div class="thead">
        <div class="tr">
          <div class="th"><h3>staff</h3></div>
          <div class="th"><h3>processing</h3></div>
          <div class="th"><h3>processed</h3></div>
        </div>
      </div>
      <div class="tbody">
        <Staff
          v-for="(staff, index) in staffs"
          :staff="staff"
          :key="index"
          @updateStatus="updateSelfStatus"
        />
      </div>
    </div>
    <Ticket
      :ticketNumber="ticketNumber"
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
  components: {
    Staff,
    Ticket,
  },
  data() {
    return {
      staffs: [
        {
          staffName: "Annie",
          curNumber: 0,
          isProcessing: false,
        },
        {
          staffName: "Jack",
          curNumber: 0,
          isProcessing: false,
        },
        {
          staffName: "Feank",
          curNumber: 0,
          isProcessing: false,
        },
        {
          staffName: "Lee",
          curNumber: 0,
          isProcessing: false,
        },
      ],
      ticketNumber: 0, //號碼牌從0開始
      queue: [], //排隊中的號碼
      cloneQueue: [],
      curProcessingNumber: 0, //目前叫號
    };
  },
  computed: {
    countLength() {
      return this.queue.length;
    },
  },
  methods: {
    selfUpdateCount(val) {
      //從ticket傳進來的號碼
      this.ticketNumber = val;
      this.queue.push(val);

      this.processNumber();
    },
    updateSelfStatus(val) {
      console.log(val); //沒收到東西
      console.log(2); //沒收到東西
    },
    processNumber() {
      //從queue拿一個號碼
      this.curProcessingNumber = this.queue.shift();
      //找一個有空的人
      for (let staff of this.staffs) {
        if (!staff.isProcessing) {
          staff.curNumber = this.curProcessingNumber;
          staff.isProcessing = true;
          break;
        }
      }
    },
  },
  mounted() {
    //console.log(this.$children[0].name);
  },
  watch: {
    // queue(val) {
    //   if (this.curNumber === 0) {
    //     this.curNumber = this.queue.shift();
    //     console.log(val);
    //   }
    // },
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
