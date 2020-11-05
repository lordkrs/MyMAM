<template>
  <h1>Bins</h1>
  <router-view></router-view>
  <ul>
    <li
      v-for="bin in getBins()"
      :key="bin._id"
    >
      <a @click.prevent="updateSelectedBin(bin._id)">{{ bin.name }}</a><br />
      <!-- <h3 @click.prevent="updateSelectedFile(file.archive_id)">{{ file.file_name }}</h3> -->
      <!-- File Size<div class="file-info">{{ file.file_size }}</div> -->
      <router-link :to="binInfoLink" v-if="selectedBin === bin._id">View more info</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      bins: [],
      selectedBin: "",
    };
  },
  methods: {
    updateSelectedBin(binId) {
      this.selectedBin = binId;
    },
    ...mapGetters(["getBins"]),
  },
  computed: {
    binInfoLink() {
      return {
        name: "bin-info-link",
        params: { binId: this.selectedBin },
        // query: { sort: "asc" },
      };
    },
  },
  created() {
    this.$store.commit("getBinsFromServer");
  },
};
</script>


<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .file-info {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>