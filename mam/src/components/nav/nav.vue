<template>
  <header>
    <nav>
      <ul>
        <li v-if="isComponentEnabled('FilesRoutes')">
          <router-link to="/files">Files</router-link>
        </li>
        <li v-if="isComponentEnabled('BinsRoutes')">
          <router-link to="/bins">Bins</router-link>
        </li>
        <li v-if="isComponentEnabled('ReportsRoutes')">
          <router-link to="/reports">Reports</router-link>
        </li>
        <li v-if="isComponentEnabled('UsersRoutes')">
          <router-link to="/users">Users </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    methods : {
        isComponentEnabled(compName){
            return (compName in this.getRoutesInfo() && this.getRoutesInfo()[compName] )
        },
        ...mapGetters(["getRoutesInfo"])

    }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>