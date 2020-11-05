<template>
  <h1>Files</h1>
  <router-view></router-view>
  <ul>
    <li
      v-for="file in getFiles()"
      :key="file.archive_id"
    >
      <a @click.prevent="updateSelectedFile(file.archive_id)">{{ file.file_name }}</a><br />
      <!-- <h3 @click.prevent="updateSelectedFile(file.archive_id)">{{ file.file_name }}</h3> -->
      <!-- File Size<div class="file-info">{{ file.file_size }}</div> -->
      <router-link :to="fileInfoLink" v-if="selectedFile === file.archive_id">View more info</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      files: [],
      selectedFile: "",
    };
  },
  methods: {
    updateSelectedFile(fileId) {
      this.selectedFile = fileId;
    },
    ...mapGetters(["getFiles"]),
  },
  computed: {
    fileInfoLink() {
      return {
        name: "file-info-link",
        params: { fileId: this.selectedFile },
        // query: { sort: "asc" },
      };
    },
  },
  created() {
    this.$store.commit("getFilesFromServer");
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