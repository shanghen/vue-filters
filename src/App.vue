<template>
  <div id="app">
    <h1>date:{{ date | date('YYYY-MM-DD HH:mm:ss') }}</h1>
    <h1>currency:{{ currency | currency }}</h1>
    <h1>number:{{ number | number }}</h1>
    <h1>lowercase:{{ msg | lowercase }}</h1>
    <h1>uppercase:{{ msg | uppercase }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      date: 1165465444550,
      currency: 15423.84787,
      number: 45654.888,
      msg: 'Hello Wold'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
