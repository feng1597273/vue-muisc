<template>
  <div id="app">
    <mhead></mhead>
    <router-view/>
  </div>
</template>

<script>
  import mhead from "@/base/header"
export default {
  name: 'App',
  components:{
    mhead
  }
}
</script>

<style>
</style>
