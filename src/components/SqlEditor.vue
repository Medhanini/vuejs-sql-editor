
<template>
  <codemirror v-model="code" :options="cmOption" />
</template>

<script>
  import { codemirror } from 'vue-codemirror'

  // language
  import 'codemirror/mode/sql/sql.js'

  // theme css
  import 'codemirror/theme/solarized.css'

  export default {
    props:{
      code:{
        type:String,
        require:true
      }
    },
    name: 'codemirror-example-mysql',
    title: 'Mode: text/x-mysql & Theme: blackboard',
    components: {
      codemirror
    },
    data() {
      return {
        cmOption: {
          tabSize: 10,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-mysql',
          theme: 'solarized light'
        }
      }
    }
  }
</script>

