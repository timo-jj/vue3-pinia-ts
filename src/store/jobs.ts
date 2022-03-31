import { defineStore } from 'pinia'
import Job from '../types/job'
import OrderTerm from '../types/orderTerm'

export const useJobs = defineStore('jobs', {
  state: () => {
    return {
      jobs: <Job[]>[
        {
          title: 'farm worker',
          location: 'lon lon ranch',
          salary: 30000,
          id: '1',
        },
        {
          title: 'quarryman',
          location: 'death mountain',
          salary: 40000,
          id: '2',
        },
        {
          title: 'flute player',
          location: 'the lost woods',
          salary: 35000,
          id: '3',
        },
        { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
        {
          title: 'prison guard',
          location: 'gerudo valley',
          salary: 32000,
          id: '5',
        },
      ],
    }
  },

  actions: {
    handleClick(term: OrderTerm) {
      this.jobs.sort((a: Job, b: Job) => {
        return a[term] > b[term] ? 1 : -1
      })
    },
  },
})
