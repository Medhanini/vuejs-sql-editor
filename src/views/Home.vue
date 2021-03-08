<template>
<b-container class="mt5" >
<h1 class="mb-5" >SQL Editor using vuejs</h1>
  <b-navbar toggleable="lg" >
      <b-button class=" ml-10 button-top" variant="outline-secondary">Success</b-button>
      <b-button class="ml-10 button-top" variant="outline-secondary">Info</b-button>
      <b-button class="ml-10 button-top" variant="outline-secondary">Warning</b-button>
    
    <b-button squared variant="outline-secondary"
>
  save
</b-button>
<b-button squared variant="outline-secondary"
>
  clear
</b-button>
<b-button squared variant="outline-secondary"
>
  copy
</b-button>
<b-button squared variant="outline-secondary"
>
  help
</b-button>
  </b-navbar>
<SqlEditor />
<b-button @click="startLoading()" squared variant="outline-secondary"
>
 <b-icon icon="play-fill"></b-icon> Run query
</b-button>
<div class="d-flex align-items-center mb-3">
      <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
        <b-progress-bar :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
      </b-progress>
    </div>
<b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
      </template>

      <b-table striped hover :items="items"></b-table>
    </b-skeleton-wrapper>
</b-container>
</template>

<script>
import SqlEditor from '../components/SqlEditor'
export default {
  name: 'Home',
  data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 3
      }
    },
  components:{
    SqlEditor 
  },
  watch: {
      loading(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newValue) {
            this.$_loadingTimeInterval = setInterval(() => {
              this.loadingTime++
            }, 1000)
          }
        }
      },
      loadingTime(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === this.maxLoadingTime) {
            this.loading = false
          }
        }
      }
    },
    created() {
      this.$_loadingTimeInterval = null
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
      }
    }
}
</script>
<style scoped>
.button-top{
  width: 100px;
}
</style>