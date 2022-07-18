<template>
  <div id="app">
    <Header />
    <CommentsBlock />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CommentsBlock from './components/CommentsBlock.vue'

export default {
  name: 'App',
  components: {
    Header,
    CommentsBlock
}
}
</script>

<style>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
