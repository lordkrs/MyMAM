<template>
  <nav-bar></nav-bar>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavBar from "./components/nav/nav.vue"

export default {
    components : {
        "nav-bar" : NavBar
    }
}
</script>