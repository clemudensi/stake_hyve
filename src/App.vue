<template>
  <div id="app">
    <Header/>
    <Banner/>
    <Features/>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header';
import Banner from './components/Banner';
import Features from "./components/Features";

export default {
  name: 'app',
  components: {
    Features,
    Banner,
    Header,
    // HelloWorld
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
