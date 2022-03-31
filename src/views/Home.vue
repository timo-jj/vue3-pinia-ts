<template>
  <main class="home">
    <header>
      <div class="title">
        <h1>Hyrule Jobs</h1>
      </div>
      <div class="order">
        <button @click="store.handleClick('title')">Order by title</button>
        <button @click="store.handleClick('salary')">Order by salary</button>
        <button @click="store.handleClick('location')">
          Order by location
        </button>
      </div>
    </header>

    <JobList :jobs="store.jobs" :order="order" />
  </main>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import { useJobs } from '../store/jobs'
import OrderTerm from '../types/orderTerm'

export default defineComponent({
  name: 'Home',

  components: {
    JobList: defineAsyncComponent(() => import('../components/JobList.vue')),
  },

  setup() {
    // Store
    const store = useJobs()

    const order = ref<OrderTerm>('title')

    return {
      store,
      order,
    }
  },
})
</script>

<style scoped>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
