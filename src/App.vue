<template>
  <div id="app">
    <mhead></mhead>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
  import mhead from "@/base/header"
  import tab from '@/base/tab'
  export default {
  name: 'App',
  components:{
    mhead,
    tab
  }
}
</script>

<style>
</style>
