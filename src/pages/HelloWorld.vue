<template>
  <div class="hello">
    <head-top></head-top>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

  </div>
</template>

<script>
  import headTop from '@/components/headTop'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    headTop,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
