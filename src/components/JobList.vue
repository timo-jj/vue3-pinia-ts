<template>
  <div class="job-list">
    <p>
      Orderd by: <strong>{{ order }}</strong>
    </p>
    <transition-group tag="ul" name="list">
      <li v-for="job in jobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} Dinards</p>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            laboriosam. Porro cumque neque sunt assumenda consequatur, odit
            repellat mollitia esse blanditiis, ad atque aliquid, est et
            perspiciatis dolorum. Dicta, adipisci!
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Job from '../types/job'
import OrderTerm from '../types/orderTerm'

export default defineComponent({
  name: 'JobList',

  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
})
</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move {
  transition: all 1s;
}
</style>
