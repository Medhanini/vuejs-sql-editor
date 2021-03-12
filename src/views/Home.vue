<template>
<b-container class="pt-5" >
<SqlEditor :code="code" />
<b-button @click="startLoading()" class="button-top folat-left" squared variant="outline-secondary"
>
 <b-icon icon="play-fill"></b-icon> Run query
</b-button>
<b-button @click="clean()" class="button-top folat-left" squared variant="outline-secondary"
>
 <b-icon icon="trash-fill"></b-icon> clean
</b-button>
<div  class="d-flex align-items-center mb-3">
      <b-progress v-show="loading" class="w-100" :max="maxLoadingTime" height="0.2rem">
        <b-progress-bar :value="loadingTime" ></b-progress-bar>
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

      <b-table  striped hover :items="items"></b-table>
    </b-skeleton-wrapper>
</b-container>
</template>

<script>
import SqlEditor from '../components/SqlEditor'
  import dedent from 'dedent'
export default {
  name: 'Home',
  data() {
      return {
        items: [],
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 3,
        code: dedent`
          -- SQL Mode for CodeMirror
          SELECT * from TableX
            -- space needed after '--'
            # 1 line comment
            /* multiline
            comment! */
            LIMIT 1 OFFSET 0;
        `,
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
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
        this.items=[
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      },
      clean() {
        this.code = ''
         this.loading = false
         this.items=[]
      }
    }
}
</script>
<style scoped>
.button-top{
border: none;  
}
</style>